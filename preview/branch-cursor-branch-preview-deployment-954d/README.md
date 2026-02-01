# 🦣 Unconventional Unit Converter

A fun, interactive web app to convert measurements using unconventional units like elephants, football fields, pizzas, and more!

## ✨ Features

- **3 Measurement Dimensions**: Length, Weight, and Height
- **Playful Units**: Elephants, giraffes, blue whales, football fields, Eiffel Towers, and many more
- **Responsive Interface**: Works great on desktop and mobile
- **Real-Time Conversion**: Updates automatically as you type
- **Fun Facts**: Interesting information about each conversion
- **Dynamic Examples**: Suggested playful conversions for each dimension
- **Localized Pages**: pt-BR (default), English, Spanish, French, German
- **System Theme**: Automatic light/dark mode with manual override

## 🚀 How to Use

1. **Choose a dimension**: Click one of the buttons (Length, Weight, Height)
2. **Enter a value**: Type the number you want to convert
3. **Select the units**: Choose the source and target units
4. **View the result**: The conversion happens automatically!

### Usage Examples

- **Length**: "How many elephants long is a football field?"
- **Weight**: "How many cats does my car weigh?"
- **Height**: "How many people tall is the Eiffel Tower?"

## 📁 Project Structure

```
unit-converter/
├── index.html              # pt-BR landing page
├── pt/
│   └── translations.js     # pt-BR strings
├── en/
│   ├── index.html
│   └── translations.js
├── es/
│   ├── index.html
│   └── translations.js
├── fr/
│   ├── index.html
│   └── translations.js
├── de/
│   ├── index.html
│   └── translations.js
├── assets/
│   ├── icons/
│   └── screenshots/
├── styles.css              # Responsive CSS styles
├── script.js               # Main JavaScript logic
├── units-data.js           # Unconventional unit data
├── integrity.test.js       # Data and translation checks
├── package.json            # Test script
└── README.md               # This documentation
```

## 🛠️ Architecture

### HTML (`index.html`)
- Semantic structure with header, main, and footer
- Interactive form for selecting dimensions and units
- Results area and dynamic information

### CSS (`styles.css`)
- Responsive design with CSS Grid and Flexbox
- Gradients and smooth animations
- Modern theme with vibrant colors
- Adapts to different screen sizes

### JavaScript (`script.js`)
- `UnitConverter` class to organize the code
- Event system for user interactions
- Smart number formatting
- Dynamic fun-fact generation

### Data (`units-data.js`)
- Extensible structure for measurement units
- Conversion factors based on standard units
- Base units and symbols for each dimension
- Emojis and conversion factors for each unit

### Translations (`*/translations.js`)
- Per-language strings for unit names, descriptions, examples, and fun facts
- Kept in sync with `units-data.js` and validated by the integrity test

## 🎯 Extensibility

The system is designed to be easily extended. To add new units:

### 1. Update unit data
Edit `units-data.js` and add new units:

```javascript
UNITS_DATA.length.units.dogs = {
    emoji: '🐕',
    factor: 0.6 // conversion factor to meters
};
```

### 2. Update translations
Add a matching entry in each `*/translations.js` file under the same dimension key:

```javascript
TRANSLATIONS.units.length.dogs = {
    name: 'Dogs',
    description: 'An average dog is about 60 centimeters long'
};
```

### 3. Adding a New Dimension
To add a new dimension (e.g., volume), add it to `UNITS_DATA`:

```javascript
UNITS_DATA.volume = {
    baseUnit: 'metros_cubicos',
    symbol: '📦',
    units: {
        // your units here
    }
};
```

Then add translations and examples in each language file, add a new dimension button
in every localized `index.html`, and update defaults in `script.js` if needed.

## 🎨 Design Features

- **Gradient Theme**: Vibrant colors with smooth gradients
- **CSS Animations**: Hover effects and bounce animations
- **Responsiveness**: Full adaptation for mobile
- **Accessibility**: Proper labels and keyboard navigation
- **Emojis**: Fun, intuitive visual interface

## 🔧 Technologies Used

- **HTML5**: Modern semantic structure
- **CSS3**: Grid, Flexbox, animations, and responsiveness
- **JavaScript ES6+**: Classes, arrow functions, template literals
- **Vanilla JS**: No external dependencies

## 📱 Compatibility

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile devices (iOS/Android)

## 🚀 Deployment

To publish it online, upload the files to any web server or use services like:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## 🤝 Contributing

Contributions are welcome! A few ideas:

- [ ] New unconventional units
- [ ] New dimension (Volume, Area, Speed)
- [x] Dark/light mode (system-based)
- [ ] Conversion history
- [ ] Result sharing
- [ ] Localization (other languages)

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute.

---

**Have fun exploring the world in crazy units! 🎉**
