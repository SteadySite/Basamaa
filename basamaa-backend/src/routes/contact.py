from flask import Blueprint, request, jsonify
from src.models.contact import Contact, db

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/contact', methods=['POST'])
def submit_contact():
    """Submit a new contact form"""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        required_fields = ['name', 'email', 'message']
        for field in required_fields:
            if field not in data or not data[field].strip():
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Basic email validation
        email = data['email'].strip()
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'Invalid email format'}), 400
        
        contact = Contact(
            name=data['name'].strip(),
            email=email,
            phone=data.get('phone', '').strip() if data.get('phone') else None,
            message=data['message'].strip()
        )
        
        db.session.add(contact)
        db.session.commit()
        
        return jsonify({
            'message': 'Contact form submitted successfully',
            'id': contact.id
        }), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@contact_bp.route('/contacts', methods=['GET'])
def get_contacts():
    """Get all contact submissions (admin only)"""
    try:
        status = request.args.get('status')
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 20, type=int)
        
        query = Contact.query
        
        if status:
            query = query.filter(Contact.status == status)
        
        # Order by most recent first
        query = query.order_by(Contact.created_at.desc())
        
        # Pagination
        contacts = query.paginate(
            page=page, 
            per_page=per_page, 
            error_out=False
        )
        
        return jsonify({
            'contacts': [contact.to_dict() for contact in contacts.items],
            'total': contacts.total,
            'pages': contacts.pages,
            'current_page': page,
            'per_page': per_page
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@contact_bp.route('/contacts/<int:contact_id>', methods=['GET'])
def get_contact(contact_id):
    """Get a specific contact submission (admin only)"""
    try:
        contact = Contact.query.get(contact_id)
        if not contact:
            return jsonify({'error': 'Contact not found'}), 404
        
        return jsonify(contact.to_dict())
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@contact_bp.route('/contacts/<int:contact_id>/status', methods=['PUT'])
def update_contact_status(contact_id):
    """Update contact status (admin only)"""
    try:
        contact = Contact.query.get(contact_id)
        if not contact:
            return jsonify({'error': 'Contact not found'}), 404
        
        data = request.get_json()
        if not data or 'status' not in data:
            return jsonify({'error': 'Status is required'}), 400
        
        valid_statuses = ['new', 'in_progress', 'resolved']
        if data['status'] not in valid_statuses:
            return jsonify({'error': f'Invalid status. Must be one of: {valid_statuses}'}), 400
        
        contact.status = data['status']
        db.session.commit()
        
        return jsonify(contact.to_dict())
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@contact_bp.route('/contacts/stats', methods=['GET'])
def get_contact_stats():
    """Get contact statistics (admin only)"""
    try:
        total_contacts = Contact.query.count()
        new_contacts = Contact.query.filter_by(status='new').count()
        in_progress_contacts = Contact.query.filter_by(status='in_progress').count()
        resolved_contacts = Contact.query.filter_by(status='resolved').count()
        
        return jsonify({
            'total': total_contacts,
            'new': new_contacts,
            'in_progress': in_progress_contacts,
            'resolved': resolved_contacts
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

