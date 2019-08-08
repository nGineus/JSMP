React Native home work
1. Create sample calculator app:
- App should have UI written with Flex
- App should have 16 numeric buttons (0123456789ABCDEF)
- App should have switch to change input for decimal / hex number system
- App should have ‘+’ button o App should have ‘=’ button
- App should have ‘Clear’ – (AC) button
- App should have input to show result o App should have input to show
current number that user enter o App should have input with current label
with all previous operation after ‘=’ was tapped

2. Initial state for result = 0
3. When HEX enabled – all 16 buttons available
4. When DEC enabled – only (0123456789) available, (ABCDEF) buttons disabled
5. When user switch HEX / DEX – result will convert to proper number system (for
example if result was ‘DD’ in HEX, and user switch to DEC system – result will be
equal ‘221’). Input field should be cleaned.
6. All Input field should be protected to enter anything from keyboard – all input
we will get from buttons
7. When user tap on ‘+’ button value from ‘Current number’ add to the ‘All
operations’
for example:
All operations: 54 + 33
Current number: 12
After + tapped:
All operations: 54 + 33 + 12
Current number:
8. When user tap on ’=’ button value from ‘All operations’ will be calculated and
moved to result and swap current result value. ‘All operations’ should be clean
9. When we tap on ‘AC’ button – all fields will get their default values

You can look at recommended interface via browser:
https://www.figma.com/file/AVIQQ1sOwIe721sqnDm88V/Calc-DEMO-task?node-id=0%3A1

To consolidate knowledge you should make homework based on what we made on the workshop:
https://snack.expo.io/@sergiiborachuk/disrespectful-turkish-delight

Evaluation criteria
1. Finish app:
- App should properly calculate sum based on allOperations field. (1 point)
- Sum should change representation based on value of the switch (DEC and HEX). (1 point)
- Move all calculation methods to utility.js. (1 point)
- Split source file into several - styles.js, button.component.js, contants.js, app.js. (1 point)
2. Optimize method of how buttons renders. Use one map function to render them all (1 points)
3. Add three new operations for our calculator: '/', '-', '*'
(3 points) (1 point for each operation)
4. Rewrite app with Hooks. Get Rid off class component:
https://reactjs.org/docs/hooks-intro.html (2 points)

Mentor Notes:
Max result – 10 points. To get the final score in stars for Grow Portal, divide number of points to 2.
For example: 7 points / 2 = 3.5 stars. 
