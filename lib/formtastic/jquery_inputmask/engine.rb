module Formtastic
  module JqueryInputmask
    class Engine < ::Rails::Engine
      initializer 'formtastic.assets.paths' do |app|
        app.config.assets.paths << File.join(File.dirname(__FILE__), '../../../vendor/Inputmask/dist')
      end
    end
  end
end
