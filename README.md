# Michael's Club Shop - Premium Golf Equipment

A modern, responsive golf equipment e-commerce site built for GitHub Pages with advanced product management capabilities.

## ✨ Features

### 🛍️ Customer Experience

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Advanced Filtering**: Search by name, brand, category, condition, and price
- **Smart Sorting**: Sort by price, name, or newest first
- **Product Details**: Rich product modals with multiple images and specifications
- **Professional UI**: Modern design with smooth animations and transitions

### 🔧 Admin Features (Hidden)

- **Secure Access**: Admin panel accessible only with secret key
- **Product Management**: Add, edit, and delete products through web interface
- **Data Export**: Export products to JSON for backup
- **Local Storage**: Products persist between sessions
- **Image Management**: Support for multiple high-quality images per product

### 🏗️ Technical Features

- **Modular Architecture**: Clean, maintainable code structure
- **External Data**: Products stored in separate `products.json` file
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Fast loading with lazy images and optimized rendering
- **GitHub Pages Ready**: No build process required

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your browser
3. **Access admin panel** by adding `?admin=michael2024` to the URL
4. **Start adding products** through the admin interface

## 🔐 Admin Access

### Method 1: URL Parameter

Add `?admin=michael2024` to your site URL:

```
https://yourusername.github.io/michaels-club-shop/?admin=michael2024
```

### Method 2: Keyboard Shortcut

Once admin is activated, use `Ctrl+K` to toggle the admin panel.

### Method 3: Floating Button

A gear icon (⚙️) will appear in the bottom-right corner when admin is active.

## 📝 Adding Products

### Through Admin Panel

1. **Activate admin access** (see above)
2. **Click the gear icon** or press `Ctrl+K`
3. **Fill out the form**:
   - **Title**: Product name (required)
   - **Brand**: Manufacturer (required)
   - **Category**: Type of club (required)
   - **Price**: Cost in USD (required)
   - **Condition**: Item condition (required)
   - **Description**: Detailed product description
   - **Specifications**: JSON format for technical specs
   - **Image URLs**: One URL per line

### Example Specifications JSON

```json
{
  "loft": "10.5°",
  "flex": "Stiff",
  "shaft": "Fujikura Ventus Red",
  "length": "45.75\"",
  "head_volume": "460cc"
}
```

### Through products.json

Edit the `products.json` file directly with this structure:

```json
{
  "id": "unique_id_here",
  "title": "Product Name",
  "brand": "Brand Name",
  "category": "Category",
  "condition": "Condition",
  "price": 299.99,
  "images": ["url1", "url2"],
  "description": "Product description",
  "specs": {
    "spec1": "value1",
    "spec2": "value2"
  },
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

## 🎨 Customization

### Changing the Admin Key

Edit the `CONFIG.ADMIN_KEY` value in `index.html`:

```javascript
const CONFIG = {
  ADMIN_KEY: "your-secret-key-here",
  // ... other config
};
```

### Styling

The site uses Tailwind CSS via CDN. You can customize colors by modifying the `tailwind.config` section in the HTML.

### Categories

Add new categories by editing the select options in the admin form or by adding products with new categories.

## 📱 Mobile Optimization

- **Touch-friendly**: Large buttons and easy navigation
- **Responsive images**: Optimized for all screen sizes
- **Fast loading**: Lazy loading and optimized assets
- **Smooth scrolling**: Native mobile scrolling behavior

## 🔒 Security Features

- **Hidden admin**: Admin panel is completely hidden from regular users
- **Local storage**: Data persists locally in your browser
- **No server required**: Everything works client-side
- **Export capability**: Backup your data anytime

## 📊 Data Management

### Local Storage

Products are automatically saved to your browser's local storage for persistence.

### Export Data

Use the "Export JSON" button in the admin panel to download your products as a JSON file.

### Import Data

Replace the `products.json` file with your exported data to restore products.

## 🛠️ Technical Details

### File Structure

```
michaels-club-shop/
├── index.html          # Main application
├── products.json       # Product data (optional)
└── README.md          # This file
```

### Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance

- **First Load**: ~50KB (HTML + Tailwind CSS)
- **Subsequent Loads**: ~5KB (cached CSS)
- **Image Loading**: Lazy loaded for optimal performance

## 🎯 Future Enhancements

### Phase 2 (Planned)

- [ ] Individual product detail pages
- [ ] Shopping cart functionality
- [ ] Contact forms for inquiries
- [ ] Wishlist feature
- [ ] Price range filters

### Phase 3 (Planned)

- [ ] User reviews and ratings
- [ ] Inventory management
- [ ] Advanced analytics
- [ ] Payment integration
- [ ] Email notifications

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome! Feel free to fork and customize for your own needs.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for the golf community**
