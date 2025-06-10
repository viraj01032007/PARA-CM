<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PARA-CO - Find Your Coliving Space</title>
  <meta name="description" content="Discover fully-furnished, beautifully designed coliving spaces in Panvel, Nerul, Kharghar, and Vashi. Find your perfect home with PARA-CO.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Georgia:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      color: #333;
    }

    /* Navigation */
    .navbar {
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }

    .logo {
      font-size: 28px;
      font-weight: 700;
      color: #5e2ca5;
    }

    .nav-links {
      display: flex;
      gap: 30px;
      list-style: none;
    }

    .nav-links a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #5e2ca5;
    }

    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    /* Hero Section */
    .hero {
      height: 100vh;
      background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
                  url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      position: relative;
      color: white;
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      width: 100%;
    }

    .hero h1 {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 20px;
      max-width: 600px;
    }

    .hero p {
      font-size: 1.25rem;
      margin-bottom: 40px;
      max-width: 500px;
      opacity: 0.9;
    }

    .search-container {
      display: flex;
      gap: 15px;
      margin-bottom: 40px;
      max-width: 500px;
    }

    .search-input {
      flex: 1;
      padding: 15px 20px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      outline: none;
    }

    .search-btn {
      padding: 15px 30px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
    }

    .search-btn:hover {
      background: #0056b3;
    }

    .founder-info {
      position: absolute;
      bottom: 40px;
      right: 40px;
      text-align: right;
      font-family: 'Georgia', serif;
    }

    .founder-title {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      opacity: 0.8;
      margin-bottom: 5px;
    }

    .founder-name {
      font-size: 18px;
      font-style: italic;
      font-weight: bold;
    }

    /* Furniture Showcase */
    .furniture-section {
      padding: 80px 20px;
      background: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .furniture-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
    }

    .furniture-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }

    .furniture-card:hover {
      transform: translateY(-10px);
    }

    .furniture-card img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .card-content {
      padding: 30px;
    }

    .card-content h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 15px;
      color: #333;
    }

    .card-content p {
      color: #666;
      line-height: 1.6;
    }

    /* City Selector */
    .city-section {
      padding: 80px 20px;
      background: white;
    }

    .section-header {
      text-align: center;
      margin-bottom: 50px;
    }

    .section-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #333;
      margin-bottom: 15px;
    }

    .city-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }

    .city-scroll {
      display: flex;
      gap: 15px;
      overflow-x: auto;
      padding: 10px 0;
      flex: 1;
      margin: 0 20px;
    }

    .city-button {
      padding: 12px 24px;
      border: none;
      border-radius: 25px;
      background: #e9ecef;
      color: #666;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s;
      white-space: nowrap;
    }

    .city-button.active {
      background: #5e2ca5;
      color: white;
    }

    .city-button:hover:not(.active) {
      background: #dee2e6;
    }

    .arrow-btn {
      padding: 10px;
      border: none;
      background: #f8f9fa;
      border-radius: 50%;
      cursor: pointer;
      font-size: 18px;
      transition: background 0.3s;
    }

    .arrow-btn:hover {
      background: #e9ecef;
    }

    .properties-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }

    .property-card {
      background: white;
      border: 1px solid #e9ecef;
      border-radius: 15px;
      padding: 30px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.08);
      transition: box-shadow 0.3s;
    }

    .property-card:hover {
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    .property-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 15px;
    }

    .property-name {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
    }

    .property-price {
      font-size: 1.5rem;
      font-weight: 700;
      color: #5e2ca5;
    }

    .property-type {
      color: #666;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .view-details-btn {
      width: 100%;
      padding: 12px;
      background: #5e2ca5;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
    }

    .view-details-btn:hover {
      background: #4a1f85;
    }

    /* Team Section */
    .team-section {
      padding: 80px 20px;
      background: #f8f9fa;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      margin-top: 50px;
    }

    .team-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s;
    }

    .team-card:hover {
      transform: translateY(-10px);
    }

    .team-card img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .team-info {
      padding: 25px;
    }

    .team-name {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }

    .team-role {
      color: #666;
      font-size: 0.95rem;
    }

    /* WhatsApp Button */
    .whatsapp-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background: #25d366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
      transition: transform 0.3s;
      z-index: 1000;
    }

    .whatsapp-btn:hover {
      transform: scale(1.1);
    }

    .whatsapp-btn svg {
      width: 30px;
      height: 30px;
      fill: white;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .mobile-menu-btn {
        display: block;
      }

      .hero h1 {
        font-size: 2.5rem;
      }

      .hero p {
        font-size: 1.1rem;
      }

      .search-container {
        flex-direction: column;
      }

      .founder-info {
        bottom: 20px;
        right: 20px;
      }

      .furniture-grid {
        grid-template-columns: 1fr;
      }

      .properties-grid {
        grid-template-columns: 1fr;
      }

      .team-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }

      .city-controls {
        flex-direction: column;
        gap: 20px;
      }

      .city-scroll {
        margin: 0;
      }
    }

    @media (max-width: 480px) {
      .hero h1 {
        font-size: 2rem;
      }

      .section-header h2 {
        font-size: 2rem;
      }

      .furniture-grid,
      .properties-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }

    .no-properties {
      text-align: center;
      padding: 40px;
      color: #666;
      font-size: 1.1rem;
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">PARA-CO</div>
      <ul class="nav-links">
        <li><a href="#explore">Explore</a></li>
        <li><a href="#list">List your space</a></li>
        <li><a href="#help">Help</a></li>
      </ul>
      <button class="mobile-menu-btn">☰</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>Find Your Coliving Space</h1>
      <p>Discover fully-furnished, beautifully designed spaces to live and work in comfort.</p>
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Search for locations..." id="searchInput">
        <button class="search-btn" onclick="handleSearch()">
          <span>🔍</span> Search
        </button>
      </div>
    </div>
    <div class="founder-info">
      <div class="founder-title">Founder & CEO</div>
      <div class="founder-name">Viraj Rajput</div>
    </div>
  </section>

  <!-- Furniture Showcase -->
  <section class="furniture-section">
    <div class="container">
      <div class="furniture-grid">
        <div class="furniture-card">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" alt="Modern Living Room">
          <div class="card-content">
            <h3>Modern Living Room</h3>
            <p>Spacious room with natural light and minimalist furniture style.</p>
          </div>
        </div>
        <div class="furniture-card">
          <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" alt="Cozy Bedroom">
          <div class="card-content">
            <h3>Cozy Bedroom</h3>
            <p>A peaceful, cozy space with warm tones and soft bedding.</p>
          </div>
        </div>
        <div class="furniture-card">
          <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" alt="Stylish Dining Area">
          <div class="card-content">
            <h3>Stylish Dining Area</h3>
            <p>Elegant dining with modern table, chairs and ambient lighting.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- City Selector -->
  <section class="city-section">
    <div class="container">
      <div class="section-header">
        <h2>Available in Cities</h2>
      </div>
      <div class="city-controls">
        <button class="arrow-btn" onclick="scrollCities(-1)">←</button>
        <div class="city-scroll" id="cityScroll">
          <button class="city-button active" onclick="selectCity('Panvel', this)">Panvel</button>
          <button class="city-button" onclick="selectCity('Nerul', this)">Nerul</button>
          <button class="city-button" onclick="selectCity('Kharghar', this)">Kharghar</button>
          <button class="city-button" onclick="selectCity('Vashi', this)">Vashi</button>
        </div>
        <button class="arrow-btn" onclick="scrollCities(1)">→</button>
      </div>
      <div class="properties-grid" id="propertiesGrid">
        <!-- Properties will be loaded here -->
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="team-section">
    <div class="container">
      <div class="section-header">
        <h2>Meet Our Team</h2>
        <p>The passionate individuals behind PARA-CO</p>
      </div>
      <div class="team-grid">
        <div class="team-card">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" alt="Shreyansh Chaubey">
          <div class="team-info">
            <div class="team-name">Shreyansh Chaubey</div>
            <div class="team-role">Operations Head</div>
          </div>
        </div>
        <div class="team-card">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" alt="Jayesh Bhosle">
          <div class="team-info">
            <div class="team-name">Jayesh Bhosle</div>
            <div class="team-role">Technical Lead</div>
          </div>
        </div>
        <div class="team-card">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" alt="Viraj Rajput">
          <div class="team-info">
            <div class="team-name">Viraj Rajput</div>
            <div class="team-role">Founder & CEO</div>
          </div>
        </div>
        <div class="team-card">
          <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" alt="Priya Mehta">
          <div class="team-info">
            <div class="team-name">Priya Mehta</div>
            <div class="team-role">Marketing Manager</div>
          </div>
        </div>
        <div class="team-card">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" alt="Ankit Sharma">
          <div class="team-info">
            <div class="team-name">Ankit Sharma</div>
            <div class="team-role">Customer Relations</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WhatsApp Button -->
  <a href="https://wa.me/919423421979" target="_blank" class="whatsapp-btn">
    <svg viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
    </svg>
  </a>

  <script>
    // Properties data
    const propertiesData = {
      "Panvel": [
        { name: "Sunrise Residency", type: "2 BHK Apartment", price: "₹15,000/month" },
        { name: "Green Meadows", type: "1 BHK Studio", price: "₹10,000/month" }
      ],
      "Nerul": [
        { name: "Ocean View Towers", type: "3 BHK Apartment", price: "₹25,000/month" },
        { name: "Palm Residency", type: "2 BHK Apartment", price: "₹18,000/month" }
      ],
      "Kharghar": [
        { name: "Lakeview Heights", type: "1 BHK Studio", price: "₹12,000/month" },
        { name: "Central Park Homes", type: "2 BHK Apartment", price: "₹16,000/month" }
      ],
      "Vashi": [
        { name: "Skyline Residency", type: "3 BHK Apartment", price: "₹22,000/month" },
        { name: "Palm Grove", type: "1 BHK Studio", price: "₹11,000/month" }
      ]
    };

    let currentCity = "Panvel";

    // Search functionality
    function handleSearch() {
      const searchValue = document.getElementById('searchInput').value.trim();
      if (searchValue) {
        alert(`Searching for: ${searchValue}`);
        // Implement actual search functionality here
      }
    }

    // Enter key for search
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSearch();
      }
    });

    // City selection
    function selectCity(cityName, buttonElement) {
      currentCity = cityName;
      
      // Update active button
      document.querySelectorAll('.city-button').forEach(btn => btn.classList.remove('active'));
      buttonElement.classList.add('active');
      
      // Load properties for selected city
      loadProperties(cityName);
    }

    // Load properties for a city
    function loadProperties(cityName) {
      const propertiesGrid = document.getElementById('propertiesGrid');
      const properties = propertiesData[cityName] || [];
      
      if (properties.length === 0) {
        propertiesGrid.innerHTML = `
          <div class="no-properties">
            No properties available in ${cityName}.
          </div>
        `;
        return;
      }
      
      propertiesGrid.innerHTML = properties.map(property => `
        <div class="property-card">
          <div class="property-header">
            <div class="property-name">${property.name}</div>
            <div class="property-price">${property.price}</div>
          </div>
          <div class="property-type">
            📍 ${property.type}
          </div>
          <button class="view-details-btn">View Details</button>
        </div>
      `).join('');
    }

    // Scroll cities
    function scrollCities(direction) {
      const cityScroll = document.getElementById('cityScroll');
      const scrollAmount = 200;
      cityScroll.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }

    // Mobile menu toggle
    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Initialize with default city
    document.addEventListener('DOMContentLoaded', function() {
      loadProperties(currentCity);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  </script>
</body>
</html>
