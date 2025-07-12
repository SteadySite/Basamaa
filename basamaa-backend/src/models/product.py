from src.models.user import db
from datetime import datetime
import json

class Product(db.Model):
    __tablename__ = 'products'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    manufacturer = db.Column(db.String(200), nullable=False)
    manufacturer_website = db.Column(db.String(500))
    price = db.Column(db.String(100), default='Contact for pricing')
    image_url = db.Column(db.String(500))
    features = db.Column(db.Text)  # JSON string
    specifications = db.Column(db.Text)  # JSON string
    applications = db.Column(db.Text)  # JSON string
    benefits = db.Column(db.Text)  # JSON string
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def __init__(self, name, category, description, manufacturer, **kwargs):
        self.name = name
        self.category = category
        self.description = description
        self.manufacturer = manufacturer
        self.manufacturer_website = kwargs.get('manufacturer_website')
        self.price = kwargs.get('price', 'Contact for pricing')
        self.image_url = kwargs.get('image_url')
        self.features = json.dumps(kwargs.get('features', []))
        self.specifications = json.dumps(kwargs.get('specifications', {}))
        self.applications = json.dumps(kwargs.get('applications', []))
        self.benefits = json.dumps(kwargs.get('benefits', []))
        self.is_active = kwargs.get('is_active', True)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'manufacturer': self.manufacturer,
            'manufacturer_website': self.manufacturer_website,
            'price': self.price,
            'image_url': self.image_url,
            'features': json.loads(self.features) if self.features else [],
            'specifications': json.loads(self.specifications) if self.specifications else {},
            'applications': json.loads(self.applications) if self.applications else [],
            'benefits': json.loads(self.benefits) if self.benefits else [],
            'is_active': self.is_active,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }
    
    def __repr__(self):
        return f'<Product {self.name}>'

