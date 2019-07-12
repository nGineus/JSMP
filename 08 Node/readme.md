Using NodeJs and MongoDB implement server to control smart home appliance:
1. CRUD to control devices:
a. ability to add device to the system (name + address)
b. ability to see the list of devices
c. ability to remove device from the system
d. ability to set state of device (On/Off)
2. Ability to control real devices
a. fake device API to emulate real hardware
i. ability to switch device On and Off
b. call appropriate device API (On/Off) when user changes device status
3. Ability to log device actions
a. log every change of device state and save log to DB
b. add endpoint to get device logs
4. Ability to combine devices into groups
a. create CRUD endpoint to manage groups
b. create endpoint to add device to group
c. create endpoint to remove device from group
d. create endpoint to set state of devices group (On/Off)
i. on each state change all devices in this group should change their state
accordingly
● Use REST approach to create all endpoints
● All endpoints should have UI that allows to easily consume them
Evaluation criterias:
1. Point 1 is implemented
2. Point 2 is implemented
3. Point 3 is implemented
4. Point 4 is implemented
5. All points with UI are implemented
