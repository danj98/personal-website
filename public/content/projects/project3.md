This is a fun little project I did to see if I could make a targeting system for a laser pointer
using an Arduino and a webcam. It consists of an Arduino connected to a PC via USB, a webcam and
a laser pointer. I use a Python script running [OpenCV](https://opencv.org/) to track faces with
the webcam. This is then fed to the Arduino which moves the laser pointer to the center of the
face by controlling the servos.

I wanted to use a OV7670 camera module, but the one I got was broken. The rig for the prototype
is custom modeled and 3D printed by me.

The code for this project can be found on my [GitHub page](https://github.com/danj98/ArduinoFaceTracker).
