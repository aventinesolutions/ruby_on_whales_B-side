# Ruby on Whales: B Side
Versin 0.1.5

Also the Coding Challenge for DAN.COM (via &Work)

from [Evil Martians](https://evilmartians.com/chronicles) and [Aventine Solutions](https://aventine.solutions/)


Validimir Dementyev's robust Docker/DockerCompose solution for Rails development.

* [Vladimir's Article](https://evilmartians.com/chronicles/ruby-on-whales-docker-for-ruby-rails-development)
* [Vladimir's Repository "Terraforming Rails"](https://github.com/evilmartians/terraforming-rails)

## Why Docker for Developement?
* Guarantees to work cross platform
* Development could be set up in the Cloud (in the future).

## Prerequisites
* Windows 10: Docker Desktop for Windows
* MacOS: Docker Desktop for Mac
* Linux: install `docker` amd `docker-compose` via the package distribution

Dockers are Linux images (not Windows).

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

## Seed Whiskeys
This seeds the Whiskey model including upload photos to Backblaze: 
```shell
% docker-compose run runner rake --trace db:seed_fu
```

## Needs Improvement
* cleanup up RSpec includes and helpers for view, controller and request tests that need Devise/Warden
* have variant sizes for the Whiskey images
* have differenct Backblaze B2 buckets for each of the environments

