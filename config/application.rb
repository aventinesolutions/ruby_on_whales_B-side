require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RubyOnWhalesBSide
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    config.active_job.queue_adapter = :sidekiq
    Sidekiq.configure_server { |c| c.redis = { url: ENV['REDIS_URL'] } }
  end
end
