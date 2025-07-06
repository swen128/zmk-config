# ZMK Config for Glove80

This repository contains my personal ZMK configuration for the MoErgo Glove80 keyboard.

## Prerequisites

- [Bun](https://bun.sh/) - JavaScript runtime and package manager
- Git
- Docker (for local builds)

## Setup

1. Clone this repository:
```bash
git clone https://github.com/yourusername/zmk-config.git
cd zmk-config
```

2. Install dependencies:
```bash
bun install
```

## Building the Firmware

### Build with Docker

```bash
bun build
```

This command will:
1. Transpile `src/keymap.ts` to `config/glove80.keymap`
2. Build the firmware using Docker
3. Generate `glove80.uf2` firmware file in the root directory

## Flashing the Firmware

### Prerequisites
- Glove80 keyboard
- USB-C cable

### Steps

1. Build the firmware using one of the methods above

2. Put the keyboard half into bootloader mode:
   - Disconnect the USB cable
   - Hold the bootloader button (small button on the PCB)
   - Connect the USB cable while holding the button
   - Release the button after 1-2 seconds
   - The keyboard half should appear as a USB drive

3. Copy the firmware file:
   - The same `glove80.uf2` file works for both halves
   - Drag and drop the file to the USB drive

4. The keyboard will automatically reboot with the new firmware

5. Repeat steps 2-4 for the other half

### Using the Flash Script (macOS/Linux)

If you're on macOS or Linux, you can use the provided flash script:

```bash
./flash-glove-firmware.sh
```

This script will:
- Wait for you to connect a keyboard half in bootloader mode
- Automatically detect which half is connected
- Flash the appropriate firmware file

## Modifying the Keymap

1. Edit the keymap in `src/keymap.ts`
2. Run type checking to ensure your changes are valid:
   ```bash
   bun typecheck
   ```
3. Build the firmware as described above

## Development

### Available Commands

```bash
bun transpile  # Transpile TypeScript to ZMK keymap
bun build      # Transpile and build firmware
bun typecheck  # Check TypeScript types
bun lint       # Run ESLint
bun check      # Run all checks (typecheck, lint, knip)
```
