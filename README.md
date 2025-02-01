PsNotification

A simple and customizable Vue 3 notification component for displaying messages in various positions with different statuses.

Installation

Install the package using npm:

npm install psnotification

Usage

Import in main.js

To use PsNotification globally in your Vue 3 project, import and register it in main.js:

import { createApp } from 'vue';
import App from './App.vue';
import PsNotification from "psnotification";
import "psnotification/dist/psnotification.css";

const app = createApp(App);
app.use(PsNotification);
app.mount("#app");

Using the Component

After registering, you can use the PsNotification component anywhere in your application:

<template>
  <PsNotification message="Hello, World!" status="success" position="top-right" />
</template>

Props

The PsNotification component accepts the following props:

Prop

Type

Default

Description

message

String

""

The message to display.

status

String

"success"

The notification status. Possible values: success, error, warning, info.

position

String

"top-right"

The position of the notification. Possible values: top-left, top-right, bottom-left, bottom-right, center-top, center-bottom.

duration

Number

3000

Time in milliseconds before the notification disappears.

Example Usage

<template>
  <div>
    <PsNotification message="Task completed successfully!" status="success" position="top-right" />
    <PsNotification message="Error occurred!" status="error" position="bottom-left" />
  </div>
</template>

License

MIT License. Free to use and modify.

