# WTWR (What To Wear) - Full Stack Weather App

A responsive, full-stack weather-based clothing recommendation app built with React frontend and Express backend. Users can register accounts, log in securely, view weather-appropriate clothing suggestions, add new items to their personal wardrobe, like items, and manage their clothing collection based on current weather conditions.

## 🔗 Related Repositories

- **Backend API**: [se_project_express](https://github.com/Evan-Boodoosingh/se_project_express.git) - Express.js backend with MongoDB
- **Frontend**: This repository - React frontend application

## 🌟 Features

### 🌤️ Weather & Recommendations

- **Live Weather Data**: Fetches real-time weather from OpenWeatherMap API
- **Smart Clothing Recommendations**: Filters clothing items based on current temperature (hot, warm, cold)
- **Day/Night Weather Cards**: Dynamic weather imagery that changes based on time of day
- **Temperature Toggle**: Switch between Fahrenheit and Celsius

### 🔐 User Authentication & Security

- **User Registration**: Create new accounts with secure password hashing
- **User Login**: JWT-based authentication with persistent sessions
- **Protected Routes**: Profile page accessible only to authenticated users
- **Token Validation**: Automatic token checking on app load
- **Secure Logout**: Complete session cleanup and token removal

### 👔 Clothing Management

- **Personal Wardrobe**: Add, view, and delete your own clothing items
- **Like System**: Like/unlike clothing items with persistent state
- **User-Specific Content**: Profile page shows only your clothing items
- **Real-time Updates**: Instant UI updates for all interactions

### 👤 Profile Management

- **User Profile**: Dedicated profile page with avatar and user info
- **Edit Profile**: Update name and avatar URL
- **Profile Sidebar**: User information display with edit/logout options

### 🎨 UI/UX Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Form Validation**: Real-time validation with disabled submit buttons
- **Error Handling**: User-friendly error messages for login/registration
- **Loading States**: Visual feedback during API operations
- **Modal System**: Intuitive modals for all user interactions

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 18.3.1 with Hooks and Context API
- **Routing**: React Router DOM 6.30.1 with protected routes
- **Build Tool**: Vite 5.3.1 for fast development and builds
- **Styling**: CSS3 with BEM methodology and component-based stylesheets
- **State Management**: React Context for user and temperature state
- **Development**: ESLint for code quality

### Backend

- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) with bcrypt password hashing
- **Security**: Protected API routes with middleware authentication
- **Validation**: Schema validation with Mongoose and custom validators

### APIs & Services

- **Weather**: OpenWeatherMap Weather API
- **Image Storage**: External image hosting (user-provided URLs)

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run json-server` - Start JSON Server API on port 3001
- `npm run lint` - Run ESLint code quality checks

## 🌐 API Documentation

### Base URL: `http://localhost:3001`

### Backend Repository: [se_project_express](https://github.com/Evan-Boodoosingh/se_project_express.git)

### Authentication

#### Public Endpoints

- **POST** `/signup` - Register a new user
- **POST** `/signin` - User login

#### Protected Endpoints (require Authorization header)

- **GET** `/users/me` - Get current user information
- **PATCH** `/users/me` - Update user profile

### Clothing Items API

All clothing items follow this data structure:

```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "name": "T-Shirt",
  "weather": "hot",
  "imageUrl": "https://example.com/image.png",
  "owner": "64f8a1b2c3d4e5f6a7b8c9d1",
  "likes": ["64f8a1b2c3d4e5f6a7b8c9d1"],
  "createdAt": "2023-09-06T10:30:00.000Z"
}
```

#### Public Endpoints

- **GET** `/items` - Retrieve all clothing items (no auth required)

#### Protected Endpoints (require JWT token)

- **POST** `/items` - Add a new clothing item (owner only)
- **DELETE** `/items/:id` - Delete a clothing item (owner only)
- **PUT** `/items/:id/likes` - Like a clothing item
- **DELETE** `/items/:id/likes` - Unlike a clothing item

#### Authentication Headers

```
Authorization: Bearer <jwt_token>
```

### Weather Categories:

- `"hot"` - Temperature ≥ 80°F
- `"warm"` - Temperature 70-79°F
- `"cold"` - Temperature < 70°F

## 📁 Project Structure

```
src/
├── components/
│   ├── App/                 # Main app with authentication logic
│   ├── Header/              # Navigation with login/logout state
│   ├── Main/                # Home page with filtered items
│   ├── Profile/             # Protected user profile page
│   ├── ProtectedRoute/      # Route guard for authenticated users
│   ├── WeatherCard/         # Weather information display
│   ├── ClothesSection/      # User's clothing items grid
│   ├── ItemCard/            # Individual item with like functionality
│   ├── ItemModal/           # Item detail modal
│   ├── AddItemModal/        # Add new item form
│   ├── DeleteModal/         # Delete confirmation
│   ├── LoginModal/          # User login form
│   ├── RegisterModal/       # User registration form
│   ├── EditProfileModal/    # Profile editing form
│   ├── ModalWithForm/       # Reusable modal component
│   ├── ToggleSwitch/        # Temperature unit toggle
│   ├── SideBar/             # Profile sidebar with user info
│   └── Footer/              # App footer
├── contexts/
│   ├── CurrentTemperatureUnitContext.js  # Temperature unit state
│   └── CurrentUserContext.js             # User authentication state
├── hooks/
│   └── useForm.js           # Custom form handling hook
├── utils/
│   ├── api.js               # Clothing items API calls
│   ├── auth.js              # Authentication API calls
│   ├── weatherApi.js        # Weather API integration
│   ├── constants.js         # App constants and config
│   └── defaultClothingItems.js  # Default item data
└── assets/                  # Images, icons, and static files
```

## 🎨 Key Features Explained

### Authentication System

The app features a complete JWT-based authentication system:

- **Registration**: New users create accounts with email and password
- **Login**: Secure authentication with JWT tokens stored in localStorage
- **Route Protection**: Profile page accessible only to authenticated users
- **Persistent Sessions**: Users remain logged in across browser sessions
- **Secure Logout**: Complete cleanup of tokens and user state

### Weather Integration

The app uses OpenWeatherMap API to fetch current weather conditions and automatically suggests appropriate clothing based on temperature ranges.

### Smart Filtering & Personalization

- **Weather-based filtering**: Items filtered by current temperature (hot/warm/cold)
- **User-specific content**: Profile page shows only your clothing items
- **Like system**: Save favorite items with persistent like state
- **Real-time updates**: Instant UI updates for all user interactions

### Comprehensive Modal System

- **Add Item Modal**: Form to add new clothing with validation
- **Item Detail Modal**: View full item details with delete option (owner only)
- **Delete Confirmation**: Safety modal to prevent accidental deletions
- **Authentication Modals**: Login and registration with error handling
- **Edit Profile Modal**: Update user name and avatar

### UI/UX Enhancements

- **Temperature Toggle**: Switch between Fahrenheit and Celsius
- **Form Validation**: Real-time validation with disabled buttons
- **Error States**: User-friendly error messages
- **Loading States**: Visual feedback during API operations
- **Responsive Design**: Optimized for all device sizes

## 🐛 Troubleshooting

### Common Issues:

**Authentication issues:**

- Ensure the backend server is running on port 3001
- Check that JWT tokens are properly stored in localStorage
- Verify that protected routes include the Authorization header
- Clear localStorage and re-login if experiencing token issues

**Backend connection errors:**

- Confirm the Express backend is running (see [backend repo](https://github.com/Evan-Boodoosingh/se_project_express.git))
- Check that MongoDB is running and accessible
- Verify the backend base URL in `src/utils/api.js` and `src/utils/auth.js`
- Ensure no other service is using port 3001

**Images not loading:**

- Ensure `imageUrl` contains a valid, publicly accessible URL
- Check that the URL starts with `http://` or `https://`
- Verify the image exists and is not behind authentication

**Weather data not updating:**

- Verify your OpenWeatherMap API key is valid and active
- Check the coordinates in `src/utils/constants.js`
- Ensure you haven't exceeded API rate limits

**404 errors when adding items:**

- Confirm the Express backend is running with MongoDB connected
- Check that you're logged in and have a valid JWT token
- Verify the request includes proper authentication headers
- Ensure the POST request body matches the expected format

**Like functionality not working:**

- Verify you're logged in (like buttons only show for authenticated users)
- Check that the backend `/items/:id/likes` endpoints are working
- Ensure the user ID is properly included in JWT tokens

## 🌍 Environment Configuration

Update `src/utils/constants.js` for your location:

```javascript
const coordinates = {
  lat: "your_latitude",
  lon: "your_longitude",
};
```

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

Built with ❤️ using React and Vite
