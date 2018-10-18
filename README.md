# Full Stack Project Practice

Be prepared to discuss these items with a consultant during a 1 on 1.

You may use GitHub, PowerPoint, Keynote, or any other tools you desire to
complete any part of this.

## Project Idea

What is your project idea?  How did you come up with it? Why? Who would use it?

```md
I would like to create a bike rental app.  A user can choose a rental from
a list of bikes.  The bikes table will contain different bikes with characteristics
like size, style, make, model, etc.

If time permits, I would like to have a list of Local-Bike-Shops (lbs) where a
bike in the bike list can be found for rental.
```

## Write between 3-5 user stories

We have gone over this before. Please refer to your notes, previous repos or the
google machine if you need further assistance.

```md
1. As a user, I want to create an account, so that I can rent bikes.
2. As a user, I want to view all bikes for rent, so that I can pick from available choices.
3. As a user, I want to add a bike, so that I can rent a bike.
4. As a user, I want to update a bike, so that options can be changed.
5. As a user, I want to delete a bike, so that it is no longer rented.
6. As a user, I want to view only my bikes, so that I know what I've rented.
```

## Plan your tables and columns

What tables will you need? What will the columns on the table be?

```md
users: user_id, email, password, bike_id
bikes: bike_id, style, size, make, model
lbs: bike_id, quantity
```

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your tables are related to one another
(one to many, many to many, etc).

Include an image (or a link to image) below.

![Entity Relationship Diagram](images/wdi_proj2_erd.png)

## Routing

What routes will you need to make the proper request to your API?

```md
resources :bikes, except: %i[new edit]
OR
get '/bikes' => 'bikes#index'
post '/bikes' => 'bikes#create'
patch '/bikes/:id' => 'bikes#update'
get '/bikes/:id' => 'bikes#show'
```

## Wireframes

Please create a wireframe of your planned front end.

![Wireframe](images/wdi_proj2_wireframe.png)

## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.


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
