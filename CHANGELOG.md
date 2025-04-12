## [v1.0.0-beta.2] - 2025-12-04

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