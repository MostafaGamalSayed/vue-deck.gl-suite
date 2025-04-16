## [v1.0.0-beta.3] - 2025-04-16

### ✨ New Features:

- **Google Maps Integration:**
  - Added support for Google Maps as a basemap with the new `@vue-deckgl-suite/google-maps` package.
  - Introduced Vue components for Google Maps, including:
    - `Map`: A Google Maps wrapper with extensive property and event support.
    - **Integration Examples:** Showcases layers like `HexagonLayer` and `ArcLayer` with Google Maps as the underlying basemap.
  - Support for managing environment-specific settings using a new `__GOOGLE_MAPS_KEY__` definition in the Vite configuration.

---

### 🔧 Improvements:

- **Environment Variable Support in Vite Config:**
  - Refactored Vite configuration to use `loadEnv`, allowing for easier management of environment-specific variables, especially for keys like Google Maps API.

- **Documentation Enhancements:**
  - Updated READMEs and additional documentation for `@vue-deckgl-suite/google-maps` integration, including:
    - Step-by-step installation process.
    - Sample usage with both declarative and programmatic approaches.
    - Advanced examples of geospatial visualizations using Google Maps and Deck.gl layers. .

---

## [v1.0.0-beta.2] - 2025-04-12

### 🚀 Refactor: Enhanced Deck.gl Layer Management

#### Highlights:
- **Dynamic Layer Lifecycle Management in `useLayer`**
    - Introduced a robust **watcher** to dynamically update Deck.gl layers in response to `props` changes, using deep reactivity.
    - Automatically finalizes and disposes of GPU resources when layers are replaced or unmounted, preventing potential memory leaks.

- **Major Improvements to `overlay.component.ts`:**
    - Improved `watch` logic for accurately updating and synchronizing layers across the Deck.gl context.
    - Cleanly structured the initialization and des`truction of the MapboxOverlay instance, ensuring stability and reusability.

#### Advantages for Developers:
- **Simplified Layer Updates:**  
  Managing reactive props (such as `data` or styling options) is now seamless through the watcher: layers update dynamically without requiring manual intervention.

- **Enhanced Performance:**  
  Finalization logic ensures resources are freed up appropriately, reducing GPU memory usage and preventing lingering artifacts.

- **Cleaner API Usage:**  
  Developers using the package can benefit from a clear and declarative API for defining and rendering layers, without worrying about setup or teardown details.