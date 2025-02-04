# 🎶 Fullstack Musical Streaming App 🎧

This is a fullstack application for streaming music, combining a **Spring Boot REST API backend** with a modern **Angular frontend**. The app allows users to browse, search, and stream music, while managing albums, songs, and user authentication.

## 🛠️ Technologies & Tools

### Backend (Spring Boot)
- 🚀 **Spring Boot**
- 🔒 **Spring Security** (JWT)
- 🗄️ **MongoDB** with **Spring Data MongoDB**
- 🎵 **GridFS** for secure audio file storage
- 🔌 **REST API**
- 🔄 **Spring Bean Validation**
- 🧩 **Design Patterns** (Repository, DTO, Mapper)
- 🧪 **Unit Testing** with **JUnit** & **Mockito**
- 🐳 **Docker** & **Jenkins** for continuous deployment

### Frontend (Angular)
- 🔶 **Angular 17**
- 🔄 **NgRx** for state management
- 📝 **TypeScript**
- 🔀 **RxJS**
- 🖥️ **Reactive Forms**
- 🌟 **Tailwind** for styling

---

## 🚀 Features

### Backend (Spring Boot)
#### 🎵 **Album Management**
- 📜 List albums with pagination (User or Admin)
- 🔍 Search albums by title or artist with pagination & sorting (User or Admin)
- 🔄 Filter albums by year (User or Admin)
- ➕ Add, ✏️ Edit, and ❌ Delete albums (Admin only)

#### 🎶 **Song Management**
- 📜 List songs with pagination (User or Admin)
- 🔍 Search songs by title with pagination & sorting (User or Admin)
- 🎵 List songs by album with pagination & sorting (User or Admin)
- ➕ Add, ✏️ Edit, and ❌ Delete songs (Admin only)

#### 👥 **User Management**
- 🔑 User authentication via `/api/auth/login`
- ➕ User registration via `POST /api/auth/register`
- 👤 List users (Admin only)
- 🔄 Manage user roles (Admin only)

#### 📂 **Audio File Management**
- 📤 Upload files (15MB max) in MP3, WAV, or OGG format
- 💾 Store audio files securely in GridFS

---

### Frontend (Angular)
#### 🎵 **Track Management (CRUD)**
- 📝 Create, ✏️ Update, ❌ Delete songs with NgRx state management
- 📜 Manage song metadata (name, artist, description, duration, category)
- 📤 Upload audio files

#### 🎧 **Audio Player**
- ▶️ Play, ⏸️ Pause, 🔄 Next, ⏮️ Previous
- 🔊 Control volume and progress
- 🔁 Handle player state with NgRx

#### 📱 **User Interface**
- 🔑 Authentication and Registration pages
- 🎵 Library page showing album list
- 📀 Detailed album page with all tracks
- 🔍 Search bar and filter system on both pages
- 🎧 Integrated audio player

---

## Author and Contact Information
- Termoussi Lamiaa 
- Email: lamiaa3105@gmail.com
