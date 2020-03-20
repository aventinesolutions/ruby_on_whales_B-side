# Ruby on Whales: B Side
Version 0.1.21

Also the Coding Challenge for DAN.COM (via &Work)

from [Evil Martians](https://evilmartians.com/chronicles) and [Aventine Solutions](https://aventine.solutions/)

Validimir Dementyev's robust Docker/DockerCompose solution for Rails development.

* [Vladimir's Article](https://evilmartians.com/chronicles/ruby-on-whales-docker-for-ruby-rails-development)
* [Vladimir's Repository "Terraforming Rails"](https://github.com/evilmartians/terraforming-rails)

## Why Docker for Development?
* Guarantees to work cross platform
* Development could be set up in the Cloud (in the future).

## Prerequisites
* Windows 10: Docker Desktop for Windows
* MacOS: Docker Desktop for Mac
* Linux: install `docker` amd `docker-compose` via the package distribution

Dockers are Linux images (not Windows).
Note that `winpty` is only for Windows, leave it out on Linux and MacOS.

## Ruby Version
2.6.4

## Rails Version
6.0.2

## Bootstrapping the Application
Remove any leftover volumes from previous attempts, as they can get in a confused state:
```shell
% for v in bundle node_modules packs postgres rails_cache redis storage
do
  docker volume remove ruby_on_whales_b-side_"${v}"
done
# do we have a clean list?
% docker volume ls
```

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
Backend testing is done with RSpec
```shell
% docker-compose run runner bundle exec rspec
```
Factories are found in `./spec/factories`.

Frontend testing is done with Jest and Enzyme
```shell
% yarn test
# to watch tests
% yarn test-watch
```

## Linting
Ruby linting is done with Rubocop :cop:
```shell
% docker-compose run runner bundle exec rubocop
```
TODO's are found in `./.rubocop_todo.yml`.

Javascript linting is done with ES Lint :cop:
```shell
% winpty docker-compose run runndle yarn lint
# try automatic fixes
% winpty docker-compose run runndle yarn lint-fix
```
ES lint configuration is in './eslintrc'


## Seed Whiskeys
This seeds the Whiskey model including upload photos to Backblaze: 
```shell
% docker-compose run runner rake --trace db:seed_fu
```

## Add Accounts
Accounts may *only* be added using the Rails console at this time:
```shell
% winpty docker-compose exec runner rails console
# Account.create!(email: 'someone@nowhere.org', password: '<secret>', password_confirmation: '<secret>')
```


## Needs Improvement
* cleanup up RSpec includes and helpers for view, controller and request tests that need Devise/Warden
* prefer HAML over ERB
* have variant sizes for the Whiskey images
* have different Backblaze B2 buckets for each of the environments
* use [Sentry](https://sentry.io) to log errors from the Apollo client
* could consider using TypeScript for the frontend
* improved type checking in the frontend for things like UUID,  URL's and enums.
* "real" authentication for GraphQL ([read this](https://www.howtographql.com/graphql-ruby/4-authentication/))
* self registration and confirmation of accounts with emails using [Mandrill](https://mandrillapp.com)
* Improve support for UUID's in GraphQL
* For performance, dive into "N+1" queries, connection types and pagination with GraphQL
* Define GraphQL enum types for "quality" and "stars"
* Could be bi-lingual Dutch and English using I18n and React `<Trans/>`
