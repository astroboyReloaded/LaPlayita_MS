<img src="./images/La-Playita_logo-rmbg.png" />

# La Playita MS (Management System)

This app is a custom made design to serve as a Management System for a real seafood restaurant called La Playita, located in Chihuahua, Chih. Mexico. The prupose of this app is to provide the staff of La Playita with all of the tools needed to manage staff clock in/out, inventory and dish availability, orders and sales, and all stats required to track the restaurant's performance with an easy to use, straigth forward, fully personalized UI/UX.

The app allows for the owner to create, edit and delete users and asign rolls to them; create ingredients and dishes, and asign dependencies and choices to account for availability of each dish; managers and cooks to update the inventory; for each User created to log in/out, and be able to access the different app sections depending on the assigned roll (cook/server/manager); and for each User to make the cut quick and easy on each end of shift or see the current status of theyr sales or the inventory. At any given moment, a current status report should be accessible and sendable to managers so they can view it from anywhere on a device with internet connection.


## Requirements:

### The Home-Screen IU:

- The app has a Wbsite home-page frome where the app can be downloaded for install as a PWA.

- The app works in Stand-Alone mode, all all features are available offline, except sending stat reports to the server or email.

- When the app has internet access, the stats are updated to the server automatically and asynchronouslyin the background, allowing for continous operation.

- The installed app has an icon in the home-screen of the local device.

- The app opens in a home-screen with the logo of La Playita and a mark specifying this is the Management System (MS).

- The first time it is oppened, or while there is no Owner User set up, the app prompts the User to create such User's credentials. This User haves full access to any functionality and any profile using the same Password. The owner havs to create the next User's profile and add their role(s). Manager profiles are also able to create new users and their roles, exept for a new Owner role.

- When an Owner is created, a User called 'Bar' is created, this User is the business counter, and it will only be able to Place New Orders. This User will be accessible by every User to place orders on the name of the house.

- Available actions depending on roles are: Update Inventory, Place Order,See Stats Report, and Manage Users.

- Roles are Owner, Manager, Server, Cook and Assistant. A User may have more than one role.

- Update Inventory, Stats, and Manage Users are available from within the menu located to the right of the clock-in button.

- Once a User is created, they are able to clock-in by clicking a clock-icon button located in the top-right corner of the home-screen, and selecting their profile from wihin a popup menu. Their Password is requested to complet the clock-in process.

- Once clocked-in, Servers can see a User card with their User name displayed in the homescreen.

- Every action requires the User's Password to access it's UI.

- Owner, Manager and Cook roles can Update Inventory.

- Servers can Place Orders accessing their profile, and see their personal Stats and Bar Stats.

- Any User can Place an Order by accessing the Bar User.

- Every action in the Bar profile records which User made the action.

- Owner and Manager can see all of the Stats.

- Users can clock-out from the same clock-in icon button.


### The Password UI:

 - The component displays when a certain action wants to be performed. Weather it is to manage the users or dishes, or to place orders and generate stats. This UI prompts for the Staff Member password (PIN), as soon as the 5 digit PIN has been introduced, it is validated, without the need to click any button. If it is valid, the action UI is accessed; otherwise, the input field clears, allowing for the user to try again. The UI displays a message informing that the password is invalid. If the password is a valid Staff Member PIN, but the Member does not have authorization to access that area, the UI displays such information.

### The Create User UI:

- The UI propmts the User to input a valid password to access the main-screen.

- When accessed, the UI shows a form for the user to fill with the New User's info and select a role.

- The click of a button will create the User if all info is provided in a valid fashion.


### The Inventory UI:

- The UI main-screen requires a password to display it's functionality. 

- Only Managers can Add or remove Items. When accessed, It offers the option of adding a New Dish, New Topic, New Side, or New Section. Default Sections are Main Courses and Sides.

- When selecting 'Add New Item', a form popup prompts the User to select the type of item they wish to Add, and depending on the input, offer the appropiate data inputs.

- New Topics and New Sides showld be added before a Dish that contains them or can have them as Extra, to later allow for them to be added as a Choice when the Dish is created.

- When a Dish is created, the Topics that can be added or removed, and the Sides to choose from should be asigned to the Dish whithin the creation form.

- The UI offers a window with three tabs, Dishes, Topics, and Sides. Anyone with access to the inventory can interact with these sections.

- Dishes tab is selected by default, each tab displays a list of created Items for each category, allowing the User to mark them as Available or Unavailable.

- All tabs in this UI have filters that allow for quck finding (search, check, and/or radio).

### The Place Order UI:

- When a User taps on a server card, being a specific Server or the Bar, the UI prompts the User to input their password. A valid password allows the User to access the Orders main-page.

- The main-page displays the name of the Server at the top of the screen. The main content of the page displays a list of all Dishes, allowing to add each one to the order List.

- The order list is displayed on the right side of the screen, updating with every entry the User makes.

- Every time a Dis is entered, a popup window allows for the User to modify the Dish by adding or removing Topics and, in case of a Main Course, choose the side if there's options.

- Extra Sides and Topics can be added from the Sides section.

- The UI allows for the server to print their Cut with the click of a button that will be in place of the clock-in button when inside this UI. The action will clock-out the Server.


### The Stats UI:

- The Stats Report UI is available from the menu in the home-page.

- The Stats UI will display depending on the user requesting Stats. Server can only access personal Stats. Only Owner and Manager can access Global Stats.

- The Servers can see how many of each Dish they have sold, how many of each section, how many total dishes, and how much. The UI shows how much morevthey need to sale to get to the next level of commission, and what the commission would be if they at least get to the minimmum for that level.

- The Owner and Manager can see all of these data for each Server, including Bar.

## Future Features:

- Select multiple roles.
