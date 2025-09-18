# WTWR (What To Wear) - React Weather App

A responsive weather-based clothing recommendation app built with React and Vite. Users can view weather-appropriate clothing suggestions, add new items to their wardrobe, and manage their clothing collection based on current weather conditions.

## 🌟 Features

- **Live Weather Data**: Fetches real-time weather from OpenWeatherMap API
- **Smart Clothing Recommendations**: Filters clothing items based on current temperature (hot, warm, cold)
- **Day/Night Weather Cards**: Dynamic weather imagery that changes based on time of day
- **Temperature Toggle**: Switch between Fahrenheit and Celsius
- **Clothing Management**: Add, view, and delete clothing items
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **User Profile**: Dedicated profile page for managing personal wardrobe

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1, React Router DOM 6.30.1
- **Build Tool**: Vite 5.3.1
- **Styling**: CSS3 with component-based stylesheets
- **Backend**: JSON Server (for development)
- **API**: OpenWeatherMap Weather API
- **Development**: ESLint for code quality

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run json-server` - Start JSON Server API on port 3001
- `npm run lint` - Run ESLint code quality checks

## 🌐 API Documentation

### Base URL: `http://localhost:3001`

### Clothing Items API

All clothing items follow this data structure:

```json
{
  "_id": 1,
  "name": "T-Shirt",
  "weather": "hot",
  "imageUrl": "https://example.com/image.png"
}
```

#### Endpoints:

- **GET** `/items` - Retrieve all clothing items
- **POST** `/items` - Add a new clothing item
  ```json
  {
    "name": "Summer Dress",
    "weather": "hot",
    "imageUrl": "https://example.com/dress.jpg"
  }
  ```
- **DELETE** `/items/:id` - Delete a clothing item by ID

### Weather Categories:

- `"hot"` - Temperature ≥ 80°F
- `"warm"` - Temperature 70-79°F
- `"cold"` - Temperature < 70°F

## 📁 Project Structure

```
src/
├── components/
│   ├── App/                 # Main application component
│   ├── Header/              # Navigation and weather display
│   ├── Main/                # Home page layout
│   ├── Profile/             # User profile page
│   ├── WeatherCard/         # Weather information display
│   ├── ClothesSection/      # Clothing items grid
│   ├── ItemCard/            # Individual clothing item
│   ├── ItemModal/           # Item detail modal
│   ├── AddItemModal/        # Add new item form
│   ├── DeleteModal/         # Delete confirmation
│   ├── ModalWithForm/       # Reusable modal component
│   ├── ToggleSwitch/        # Temperature unit toggle
│   ├── SideBar/             # Profile sidebar
│   └── Footer/              # App footer
├── contexts/
│   └── CurrentTemperatureUnitContext.js  # Temperature unit state
├── hooks/
│   └── useForm.js           # Custom form handling hook
├── utils/
│   ├── api.js               # Clothing items API calls
│   ├── weatherApi.js        # Weather API integration
│   ├── constants.js         # App constants and config
│   └── defaultClothingItems.js  # Default item data
└── assets/                  # Images and static files
```

## 🎨 Key Features Explained

### Weather Integration

The app uses OpenWeatherMap API to fetch current weather conditions and automatically suggests appropriate clothing based on temperature ranges.

### Smart Filtering

Clothing items are automatically filtered based on the current weather condition, showing only relevant items for today's temperature.

### Responsive Modals

- **Add Item Modal**: Form to add new clothing with name, image URL, and weather category
- **Item Detail Modal**: View full item details with delete option
- **Delete Confirmation**: Safety modal to prevent accidental deletions

### Temperature Toggle

Users can switch between Fahrenheit and Celsius using the toggle switch in the header.

## 🐛 Troubleshooting

### Common Issues:

**Images not loading:**

- Ensure `imageUrl` contains a valid, publicly accessible URL
- Check that the URL starts with `http://` or `https://`
- Verify the image exists and is not behind authentication

**API connection errors:**

- Confirm JSON Server is running on port 3001
- Check that `src/utils/api.js` uses the correct base URL
- Ensure no other service is using port 3001

**Weather data not updating:**

- Verify your OpenWeatherMap API key is valid and active
- Check the coordinates in `src/utils/constants.js`
- Ensure you haven't exceeded API rate limits

**404 errors when adding items:**

- Confirm JSON Server is running with the `--id _id` flag
- Check that the POST request body matches the expected format

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
