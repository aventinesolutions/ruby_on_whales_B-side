source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.4'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.2', '>= 6.0.2.1'
gem 'pg', '~> 1.0'
gem 'puma', '~> 4.1'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'redis', '~> 4.0'
gem 'bcrypt', '~> 3.1.7'
gem 'image_processing', '~> 1.2'
gem 'sidekiq', '~> 6.0'
gem 'devise', '~> 4.7'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'seed-fu', '~> 2.3'
gem 'activestorage-backblaze', '0.0.5'
gem 'graphql', '~> 1.10'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'rubocop-rails', '~> 2.4'
  gem 'better_errors', '~> 2.6'
  gem 'graphiql-rails', '~> 1.7'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
  gem 'shoulda-matchers', '~> 4.3'
  gem 'rspec-its', '~> 1.3'
  gem 'rails-controller-testing', '~> 1.0'
end

group :development, :test do
  gem 'rspec-rails', '~> 4.0.0.beta'
  gem 'factory_bot_rails', '~> 5.1'
  gem 'faker', git: 'https://github.com/faker-ruby/faker.git', branch: 'master'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
