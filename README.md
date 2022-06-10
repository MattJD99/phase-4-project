# Project - Fitness Tracker App

## Description

The Fitness Tracker App allows you to browse our exercises as a guest.  You may also login to a user profile in order to add exercises to your workout.  Afterwards, you can record the sets, reps, and weight of each exercise that you complete. All completed exercises are accessible under the "My Record" page.

## Installing

1. Fork and clone the app from https://github.com/MattJD99/phase-4-project (follow link using cmd + click)
- from the CLI run "rails db:migrate" to run server migrations
- from the CLI run "rails db:seed" to seed the database with sample data.
- from the CLI run "rails s" to start the server

2. Navigate to the "client" folder in the CLI
- from the CLI run "npm install" to install dependencies
- from the CLI run "npm start" to launch the client application in your local browser

3. In order to LOGIN:
- because this is a locally run application there are only two profiles credentials available for login.
    1. name: Matt password: password
    2. name: Kimmy password: password

* Please follow the Getting Started summary in order to ensure project server and client run correctly.

### Using the application

* When you launch the app you can view our exercises as a guest but will not have an option to add exercises to your workout.  If you login with the supplied credentials you can add exercises to your workout.  Once the workout is added you will be redirected to the user Profile.  This page holds all of the exercises in your workout. 

* If you complete an exercise you can record your stats on the "Record Exercise" page.  This is where you will select an exercise from the dropdown menu, which is populated with exersices you have added to your workout, and can enter the sets, reps, and weight you completed. 

* Your completed workout will be tracked and displayed on the "My Record" page. 

## Authors

Contributors names and contact info

* Matthew De Sautel  
* email: dayclawtel@gmail.com 

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

Copyright (c) <year>, <copyright holder>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## Acknowledgments

Thank you for your interest.

Matt