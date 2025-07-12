from flask import Blueprint, request, jsonify
from src.models.product import Product, db
import json

product_bp = Blueprint('product', __name__)

@product_bp.route('/products', methods=['GET'])
def get_products():
    """Get all active products with optional filtering"""
    try:
        category = request.args.get('category')
        search = request.args.get('search')
        
        query = Product.query.filter_by(is_active=True)
        
        if category and category != 'All':
            query = query.filter(Product.category == category)
        
        if search:
            search_term = f"%{search}%"
            query = query.filter(
                db.or_(
                    Product.name.ilike(search_term),
                    Product.description.ilike(search_term),
                    Product.manufacturer.ilike(search_term)
                )
            )
        
        products = query.all()
        return jsonify([product.to_dict() for product in products])
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@product_bp.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    """Get a specific product by ID"""
    try:
        product = Product.query.filter_by(id=product_id, is_active=True).first()
        if not product:
            return jsonify({'error': 'Product not found'}), 404
        
        return jsonify(product.to_dict())
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@product_bp.route('/products/categories', methods=['GET'])
def get_categories():
    """Get all unique product categories"""
    try:
        categories = db.session.query(Product.category).filter_by(is_active=True).distinct().all()
        category_list = [category[0] for category in categories]
        return jsonify(category_list)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@product_bp.route('/products', methods=['POST'])
def create_product():
    """Create a new product (admin only)"""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        required_fields = ['name', 'category', 'description', 'manufacturer']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        product = Product(
            name=data['name'],
            category=data['category'],
            description=data['description'],
            manufacturer=data['manufacturer'],
            manufacturer_website=data.get('manufacturer_website'),
            price=data.get('price', 'Contact for pricing'),
            image_url=data.get('image_url'),
            features=data.get('features', []),
            specifications=data.get('specifications', {}),
            applications=data.get('applications', []),
            benefits=data.get('benefits', [])
        )
        
        db.session.add(product)
        db.session.commit()
        
        return jsonify(product.to_dict()), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@product_bp.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    """Update a product (admin only)"""
    try:
        product = Product.query.get(product_id)
        if not product:
            return jsonify({'error': 'Product not found'}), 404
        
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        # Update fields if provided
        if 'name' in data:
            product.name = data['name']
        if 'category' in data:
            product.category = data['category']
        if 'description' in data:
            product.description = data['description']
        if 'manufacturer' in data:
            product.manufacturer = data['manufacturer']
        if 'manufacturer_website' in data:
            product.manufacturer_website = data['manufacturer_website']
        if 'price' in data:
            product.price = data['price']
        if 'image_url' in data:
            product.image_url = data['image_url']
        if 'features' in data:
            product.features = json.dumps(data['features'])
        if 'specifications' in data:
            product.specifications = json.dumps(data['specifications'])
        if 'applications' in data:
            product.applications = json.dumps(data['applications'])
        if 'benefits' in data:
            product.benefits = json.dumps(data['benefits'])
        if 'is_active' in data:
            product.is_active = data['is_active']
        
        db.session.commit()
        return jsonify(product.to_dict())
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@product_bp.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    """Soft delete a product (admin only)"""
    try:
        product = Product.query.get(product_id)
        if not product:
            return jsonify({'error': 'Product not found'}), 404
        
        product.is_active = False
        db.session.commit()
        
        return jsonify({'message': 'Product deleted successfully'})
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

