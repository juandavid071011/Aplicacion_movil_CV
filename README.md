# Aplicación Móvil Hoja de Vida

Aplicación móvil de hoja de vida desarrollada con React Native y Expo como
actividad del programa Análisis y Desarrollo de Software (ADSO) del SENA.

**Autor:** Juan David Alonso Cuellar

## Pantallas

- **Inicio:** datos personales, perfil profesional y botones de contacto.
- **Estudios:** formación académica; el estudio en curso se resalta con otro color.
- **Experiencia:** experiencia laboral en tarjetas.
- **Hobbies:** intereses personales; al tocar una tarjeta aparece una alerta.

## Tecnologías

- React Native y Expo (SDK 58)
- Expo Router (navegación por pestañas)
- @expo/vector-icons (íconos)
- TypeScript

## Estructura

    src/
    ├── app/
    │   ├── _layout.tsx
    │   ├── index.tsx
    │   ├── estudios.tsx
    │   ├── experiencia.tsx
    │   └── hobbies.tsx
    └── components/
        ├── MiBoton.tsx
        ├── TarjetaEstudio.tsx
        ├── TarjetaExperiencia.tsx
        └── TarjetaHobby.tsx

## Cómo ejecutarla

    npm install
    npx expo start

Escanea el código QR con la app Expo Go.
