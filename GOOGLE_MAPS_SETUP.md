# Google Maps Integration Setup

## 🗺️ Current Status
I've added a **Location & Contact section** with an embedded Google Maps iframe to both the **Homepage** and **About page**. Currently using a placeholder map URL that needs to be replaced with your actual location.

## 🎯 What's Been Added

### ✅ **Location Sections Include:**
1. **📍 Contact Information Panel**:
   - Restaurant address: "Shop No. 15, Ground Floor, Shivaji Nagar, Bandra West, Mumbai - 400050, Maharashtra"
   - Phone numbers (mobile & landline)
   - Opening hours (11:00 AM - 11:00 PM, 7 days a week)
   - "Get Directions" button linking to Google Maps

2. **🗺️ Embedded Interactive Map**:
   - Responsive iframe that works on all devices
   - Custom overlay with "We're Here!" speech bubble
   - Professional styling with comic panels
   - Map caption with transport information

3. **📊 Quick Stats Section** (Homepage only):
   - 5 KM delivery radius
   - 30 MIN average delivery time
   - PRIME location indicator
   - 24/7 support availability

4. **🧭 Updated Navigation**:
   - Desktop navigation includes "Location" button
   - Mobile navigation includes "Find Us" option
   - Smooth scrolling to location section

## 📝 **How to Set Up Real Google Maps**

### **Step 1: Get Your Exact Location**
1. Go to [Google Maps](https://maps.google.com)
2. Search for your restaurant's exact address
3. Copy the coordinates or place ID

### **Step 2: Generate Embed Code**
1. Go to [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)
2. Or use [Google Maps Embed Generator](https://www.embed-map.com/)
3. Enter your restaurant details:
   - **Name**: Kaatil Mutton
   - **Address**: Your exact address in Mumbai
   - **Location**: Bandra West, Mumbai (or your specific area)

### **Step 3: Replace the Placeholder**
Find this code in both `src/pages/Index.tsx` and `src/pages/About.tsx`:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!3d3771.2234567890123!2d72.8261!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c7b123456%3A0x123456789abcdef!2sShivaji%20Nagar%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
  // ... other attributes
/>
```

**Replace with your generated embed URL**

### **Step 4: Update Address Details**
Update the contact information in the location sections:
- **Address**: Your actual restaurant address
- **Phone Numbers**: Your real contact numbers
- **Opening Hours**: Your actual operating hours

### **Step 5: Test the Integration**
1. Build the project: `npm run build`
2. Test on different devices and screen sizes
3. Verify the "Get Directions" button works correctly

## 🎨 **Design Features**

### **Professional Styling:**
- ✅ Cartoonish comic panels with borders
- ✅ Responsive design for all screen sizes
- ✅ Interactive hover effects
- ✅ Speech bubble overlays
- ✅ Consistent brand colors

### **User Experience:**
- ✅ Easy-to-find contact information
- ✅ One-click directions to your location
- ✅ Mobile-friendly map interface
- ✅ Clear operating hours display
- ✅ Multiple contact methods

### **SEO Benefits:**
- ✅ Structured contact information
- ✅ Local business schema potential
- ✅ Improved local search visibility
- ✅ Better user engagement metrics

## 🚀 **Next Steps**

1. **Replace placeholder map** with your actual Google Maps embed
2. **Update contact details** with real information
3. **Test responsiveness** across devices
4. **Consider adding** Google Business Profile integration
5. **Add local schema markup** for better SEO

---

**Current Features:** ✅ Embedded maps, contact info, directions, responsive design
**Needs Setup:** ⏳ Replace placeholder with real Google Maps embed URL

The location section is fully functional and styled - you just need to plug in your actual Google Maps embed URL and contact details!
