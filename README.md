# Ruby on Whales: B Side
[from Evil Martians](https://evilmartians.com/chronicles)

Validimir Dementyev's robust Docker/DockerCompose solution for Rails development.

* [Vladimir's Article](https://evilmartians.com/chronicles/ruby-on-whales-docker-for-ruby-rails-development)
* [Vladimir's Repository "Terraforming Rails"](https://github.com/evilmartians/terraforming-rails)

## Prerequisite
* Docker Desktop for Windows or Macintosh

## Running the system and managing containers

Bring up the system
```shell
% docker-compose up
```
Stopping container processes
```shell
% docker-compose kill
```
Stopping and removing containers
```shell
% docker-compose down
```
Running database tasks with `rake`
```shell
% docker exec -it ruby_on_whales_b-side_rails_1 bundle exec rake --trace db:migrate
```

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
