from flask import Blueprint, request, jsonify, render_template_string
from src.models.product import Product, db
from src.models.contact import Contact
import json

admin_bp = Blueprint('admin', __name__)

# Simple admin dashboard HTML template
ADMIN_TEMPLATE = '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basamaa Admin Dashboard</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 20px; }
        .stat-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .stat-number { font-size: 2em; font-weight: bold; color: #3b82f6; }
        .stat-label { color: #666; margin-top: 5px; }
        .section { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .section h2 { margin-bottom: 15px; color: #333; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #eee; }
        th { background: #f8f9fa; font-weight: 600; }
        .btn { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; text-decoration: none; display: inline-block; }
        .btn-primary { background: #3b82f6; color: white; }
        .btn-success { background: #10b981; color: white; }
        .btn-warning { background: #f59e0b; color: white; }
        .btn-danger { background: #ef4444; color: white; }
        .status-new { color: #ef4444; font-weight: bold; }
        .status-in_progress { color: #f59e0b; font-weight: bold; }
        .status-resolved { color: #10b981; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Basamaa Admin Dashboard</h1>
            <p>Manage products and view contact submissions</p>
        </div>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-number" id="total-products">0</div>
                <div class="stat-label">Total Products</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="total-contacts">0</div>
                <div class="stat-label">Total Contacts</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="new-contacts">0</div>
                <div class="stat-label">New Contacts</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="pending-contacts">0</div>
                <div class="stat-label">Pending Contacts</div>
            </div>
        </div>
        
        <div class="section">
            <h2>Recent Contact Submissions</h2>
            <table id="contacts-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        
        <div class="section">
            <h2>Products Management</h2>
            <button class="btn btn-primary" onclick="showAddProductForm()">Add New Product</button>
            <table id="products-table" style="margin-top: 15px;">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Manufacturer</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>

    <script>
        // Load dashboard data
        async function loadDashboard() {
            try {
                // Load contact stats
                const statsResponse = await fetch('/api/contacts/stats');
                const stats = await statsResponse.json();
                document.getElementById('total-contacts').textContent = stats.total;
                document.getElementById('new-contacts').textContent = stats.new;
                document.getElementById('pending-contacts').textContent = stats.in_progress;
                
                // Load contacts
                const contactsResponse = await fetch('/api/contacts');
                const contactsData = await contactsResponse.json();
                renderContacts(contactsData.contacts);
                
                // Load products
                const productsResponse = await fetch('/api/products');
                const products = await productsResponse.json();
                document.getElementById('total-products').textContent = products.length;
                renderProducts(products);
                
            } catch (error) {
                console.error('Error loading dashboard:', error);
            }
        }
        
        function renderContacts(contacts) {
            const tbody = document.querySelector('#contacts-table tbody');
            tbody.innerHTML = contacts.map(contact => `
                <tr>
                    <td>${contact.name}</td>
                    <td>${contact.email}</td>
                    <td>${contact.phone || 'N/A'}</td>
                    <td><span class="status-${contact.status}">${contact.status.replace('_', ' ')}</span></td>
                    <td>${new Date(contact.created_at).toLocaleDateString()}</td>
                    <td>
                        <select onchange="updateContactStatus(${contact.id}, this.value)">
                            <option value="new" ${contact.status === 'new' ? 'selected' : ''}>New</option>
                            <option value="in_progress" ${contact.status === 'in_progress' ? 'selected' : ''}>In Progress</option>
                            <option value="resolved" ${contact.status === 'resolved' ? 'selected' : ''}>Resolved</option>
                        </select>
                    </td>
                </tr>
            `).join('');
        }
        
        function renderProducts(products) {
            const tbody = document.querySelector('#products-table tbody');
            tbody.innerHTML = products.map(product => `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>${product.manufacturer}</td>
                    <td>${product.is_active ? 'Active' : 'Inactive'}</td>
                    <td>
                        <button class="btn btn-warning" onclick="editProduct(${product.id})">Edit</button>
                        <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
                    </td>
                </tr>
            `).join('');
        }
        
        async function updateContactStatus(contactId, status) {
            try {
                await fetch(`/api/contacts/${contactId}/status`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status })
                });
                loadDashboard(); // Reload to update stats
            } catch (error) {
                console.error('Error updating contact status:', error);
            }
        }
        
        function showAddProductForm() {
            alert('Add product form would be implemented here');
        }
        
        function editProduct(productId) {
            alert(`Edit product ${productId} form would be implemented here`);
        }
        
        async function deleteProduct(productId) {
            if (confirm('Are you sure you want to delete this product?')) {
                try {
                    await fetch(`/api/products/${productId}`, { method: 'DELETE' });
                    loadDashboard();
                } catch (error) {
                    console.error('Error deleting product:', error);
                }
            }
        }
        
        // Load dashboard on page load
        loadDashboard();
    </script>
</body>
</html>
'''

@admin_bp.route('/admin')
def admin_dashboard():
    """Admin dashboard for managing products and contacts"""
    return render_template_string(ADMIN_TEMPLATE)

@admin_bp.route('/admin/seed-products', methods=['POST'])
def seed_products():
    """Seed the database with initial product data"""
    try:
        # Check if products already exist
        if Product.query.count() > 0:
            return jsonify({'message': 'Products already exist in database'}), 400
        
        sample_products = [
            {
                'name': 'Digital X-Ray System',
                'category': 'Diagnostic Equipment',
                'description': 'High-resolution digital radiography system for accurate diagnostic imaging with advanced image processing capabilities.',
                'manufacturer': 'MedTech Solutions',
                'manufacturer_website': 'https://medtechsolutions.com',
                'features': [
                    'High resolution imaging up to 14-bit depth',
                    'Digital workflow integration',
                    'DICOM compatible with PACS connectivity',
                    'Low radiation dose technology',
                    'Automatic exposure control',
                    'Advanced image processing algorithms'
                ],
                'specifications': {
                    'Image Matrix': '3000 x 3000 pixels',
                    'Pixel Size': '100 μm',
                    'A/D Conversion': '14-bit',
                    'Interface': 'Ethernet, USB 3.0',
                    'Power Requirements': '100-240V AC, 50/60Hz'
                },
                'applications': [
                    'General radiography',
                    'Orthopedic imaging',
                    'Chest examinations',
                    'Emergency diagnostics'
                ],
                'benefits': [
                    'Improved diagnostic accuracy',
                    'Reduced patient exposure',
                    'Enhanced workflow efficiency',
                    'Cost-effective operation'
                ]
            },
            {
                'name': 'Surgical Microscope',
                'category': 'Surgical Instruments',
                'description': 'Advanced surgical microscope with LED illumination and HD recording capabilities for precision surgical procedures.',
                'manufacturer': 'Precision Optics',
                'manufacturer_website': 'https://precisionoptics.com',
                'features': [
                    'LED illumination system',
                    'HD recording capability',
                    'Motorized focus and zoom',
                    'Ergonomic design',
                    'Multiple magnification levels'
                ],
                'specifications': {
                    'Magnification Range': '6x to 40x',
                    'Working Distance': '200-400mm',
                    'Illumination': 'LED, 50,000 hour life',
                    'Camera Resolution': '4K Ultra HD'
                },
                'applications': [
                    'Neurosurgery',
                    'Ophthalmology',
                    'ENT procedures',
                    'Plastic surgery'
                ],
                'benefits': [
                    'Enhanced visualization',
                    'Improved surgical precision',
                    'Reduced eye strain',
                    'Better documentation'
                ]
            },
            {
                'name': 'Patient Monitor',
                'category': 'Patient Monitoring',
                'description': 'Multi-parameter patient monitoring system for critical care with advanced alarm management.',
                'manufacturer': 'VitalCare Systems',
                'manufacturer_website': 'https://vitalcaresystems.com',
                'features': [
                    'Multi-parameter monitoring',
                    'Wireless connectivity',
                    'Advanced alarm management',
                    'Data storage and trending',
                    'Touch screen interface'
                ],
                'specifications': {
                    'Parameters': 'ECG, SpO2, NIBP, Temperature, Respiration',
                    'Display': '15-inch color touchscreen',
                    'Connectivity': 'WiFi, Ethernet, Bluetooth',
                    'Battery Life': 'Up to 4 hours'
                },
                'applications': [
                    'ICU monitoring',
                    'Emergency departments',
                    'Post-operative care',
                    'Ambulatory monitoring'
                ],
                'benefits': [
                    'Continuous patient monitoring',
                    'Early warning alerts',
                    'Improved patient safety',
                    'Streamlined workflow'
                ]
            },
            {
                'name': 'Automated Analyzer',
                'category': 'Laboratory Equipment',
                'description': 'High-throughput automated clinical chemistry analyzer for accurate and efficient laboratory testing.',
                'manufacturer': 'LabTech Instruments',
                'manufacturer_website': 'https://labtechinstruments.com',
                'features': [
                    'High throughput processing',
                    'Automated sample handling',
                    'Quality control monitoring',
                    'Result reporting system',
                    'Reagent management'
                ],
                'specifications': {
                    'Throughput': 'Up to 800 tests/hour',
                    'Sample Types': 'Serum, plasma, urine',
                    'Test Menu': '100+ chemistry parameters',
                    'Sample Volume': '2-35 μL'
                },
                'applications': [
                    'Clinical chemistry',
                    'Routine diagnostics',
                    'Emergency testing',
                    'Research applications'
                ],
                'benefits': [
                    'Increased laboratory efficiency',
                    'Reduced manual errors',
                    'Fast turnaround times',
                    'Cost-effective testing'
                ]
            }
        ]
        
        for product_data in sample_products:
            product = Product(**product_data)
            db.session.add(product)
        
        db.session.commit()
        
        return jsonify({
            'message': f'Successfully seeded {len(sample_products)} products',
            'count': len(sample_products)
        }), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

