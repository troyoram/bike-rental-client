# Bike Rental Application - Full Stack Project

The Ben Lomond Bike Rental application is the second project assigned to students
in General Assembly's Web Development Immersive (WDI) Course.  The student is
tasked with building a Single Page Application (SPA).  Users will be required
to authenticate through sign-up, sign-in, change-password, and sign-out using
a custom Application Programming Interface (API).  Once signed in, users can
create, read, update, and delete bikes in an SQL database for others to
potentially rent.

## Project Links

[Requirements](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project/)

[Bike Rental Client - Repo](https://github.com/troyoram/bike-rental-client)

[Bike Rental Client - Deployed](https://troyoram.github.io/bike-rental-client/)

[Bike Rental Server - Repo](https://github.com/troyoram/bike-rental-server)

[Bike Rental Server - Deployed](https://bike-rental-server.herokuapp.com/bikes)

## Description

Although there are many companies that rent their own bikes, I would like to
create an application where any individual or Local Bike Shop (LBS) can post
bikes for rent in one central repository.  Think of AirBnB, but for bike
rentals.

The Bike Rental Client provides the user interface where new users can sign up
and existing users can sign-in, change-password, and sign-out.  Signed in users
can use buttons and forms to view bikes from all users or create, update, and
delete their own bikes.  The Bike Rental Client is deployed using Git Hub Pages.

The Bike Rental Server is the back-end API that responds to, and processes
requests from the client.  The Bike Rental Server is deployed on heroku.

## User Stories

1. As a user, I want to create an account, so that I can list bikes for rent.
2. As a user, I want to view all bikes for rent, so that I can view available choices.
3. As a user, I want to add a bike, so that I can post a bike for rent.
4. As a user, I want to update a bike, so that options can be changed.
5. As a user, I want to delete a bike, so that it can no longer rented.
6. As a user, I want to view my bikes, so that I know what I've posted for rent.

## Tables and Columns

users: user_id, email, password

bikes: bike_id, style, size, user_id

## Entity Relationship Diagram (ERD)

![Entity Relationship Diagram](images/wdi_proj2_erd.png)

## Routing

resources :bikes, except: %i[new edit]

OR

get '/bikes' => 'bikes#index'

post '/bikes' => 'bikes#create'

patch '/bikes/:id' => 'bikes#update'

get '/bikes/:id' => 'bikes#show'

delete '/bikes/:id' => 'bikes#delete'

## Wireframes

![Wireframe](images/wdi_proj2_wireframe.png)

## Technologies Used

1. *Browser:* Google Chrome with DevTools
1. *Editor:* Atom
1. *Client-side tools:* HTML, CSS, Javascript, JQuery, AJAX, JSON, bootstrap, Node Package Manager, curl-scripts
1. *Server-side tools:* Ruby, Rails, JSON, curl-scripts

## Schedule

### October 17, 2018
### Planning
1.  [ ] Review [full-stack-project-practice](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project-practice)
1.  [ ] Review [full-stack-project-modeling-lab](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project-modeling-lab)
1.  [ ] Create User Stories
1.  [ ] Create Wire Frames
1.  [ ] Create ERD

### October 18, 2018
### Set Up

API

1.  [ ] [Download Rails API Template](https://git.generalassemb.ly/ga-wdi-boston/rails-api-template)
1.  [ ] Create a Github Repository
1.  [ ] [Deploy to Heroku](https://git.generalassemb.ly/ga-wdi-boston/rails-heroku-setup-guide)

Client

1.  [ ] [Download Browser Template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)
1.  [ ] Create a Github Repository
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### October 18-22, 2018
### API
1.  [ ] Review [rails-api-one-to-many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-one-to-many) or [rails-api-many-to-many](https://git.generalassemb.ly/ga-wdi-boston/rails-api-many-to-many)
1.  [ ] Scaffold your resource
1.  [ ] Test your resource's end points with curl scripts
1.  [ ] Update resource controller to inherit from Protected or OpenRead controller
1.  [ ] Test your resource's end points with curl scripts
1.  [ ] Add the relationship to a User
1.  [ ] Add User ownership to resource controller

### October 18-22, 2018
### Client
1.  [ ] Review [api-token-auth](https://git.generalassemb.ly/ga-wdi-boston/api-token-auth)
1.  [ ] Sign Up (curl then web app)
1.  [ ] Sign In (curl then web app)
1.  [ ] Change Password (curl then web app)
1.  [ ] Sign Out (curl then web page)
1.  [ ] All API calls have success or failure messages
1.  [ ] Review [query-ajax-post](https://github.com/ga-wdi-boston/jquery-ajax-post)
1.  [ ] Create resource (curl then web app)
1.  [ ] Get all of their owned resources (curl then web app)
1.  [ ] Delete single resource (curl then web app)
1.  [ ] Update single resource (curl then web app)

### October 23, 2018
### Final Touches
1.  [ ] README
2.  [ ] Troubleshoot/Debug
3.  [ ] Style

## Problem Resolution

As problems with design and development were encountered, a new issued was created
and addressed through General Assembly's Full-Stack Project [Issue Queue](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project/issues)

## Unsolved problems to be fixed in future releases

1. If time permits, I would like to add a feature where a potential bike renter can input a desired bike style and size and have the application return matching bikes and owner contact information

## Testing

There were no requirements for developing automated tests for this project.  As
a result, no automated tests exist for the Full-Stack project.

### Coding style tests

Linter for Atom was used to enforce coding style

## Deployment

'grunt deploy' was used to deploy to github pages

## Built With

Ruby on Rails framework was used for the server-side of this project. No
dependency management or RSS feeds were used for this project

## Contributing

Please read [CONTRIBUTING.md](https://github.com/troyoram/bike-rental-client/blob/master/CONTRIBUTING.md) for details on the process for submitting pull requests.

## Versioning

'git commit' and 'git push' were used for versioning. For the versions available,
see the Project Links above.

## Authors

* **Troy Oram** - *Initial work*

## License

This project is licensed is licensed under a CC-BY-NC-SA 4.0 license - see the [LICENSE.md](https://github.com/troyoram/bike-rental-client/blob/master/LICENSE) file for details

## Acknowledgments
N/A
