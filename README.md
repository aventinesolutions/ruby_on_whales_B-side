# Ruby on Whales: B Side
[from Evil Martians](https://evilmartians.com/chronicles)

Validimir Dementyev's robust Docker/DockerCompose solution for Rails development.

* [Vladimir's Article](https://evilmartians.com/chronicles/ruby-on-whales-docker-for-ruby-rails-development)
* [Vladimir's Repository "Terraforming Rails"](https://github.com/evilmartians/terraforming-rails)

## Prerequisite
* Docker Desktop for Windows or Macintosh

## Ruby Version
2.6.4

## Rails Version
6.0.2

## Running the system and managing containers

Bring up the system
```shell
% docker-compose up
```
Stopping container processes
```shell
% docker-compose stop
```
Stopping and removing containers
```shell
% docker-compose down
```
Running database tasks with `rake`
```shell
% docker exec -it ruby_on_whales_b-side_rails_1 bundle exec rake --trace db:migrate
```

## Testing
Testing is done with RSpec
```shell
% docker-compose run runner bundle exec rspec
```
Factories are found in `./spec/factories`.

## Linting
Linting is done with Rubocop :cop:
```shell
% docker-compose run runner bundle exec rubocop
```
TODO's are found in `./.rubocop_todo.yml`.
