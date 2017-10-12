module Formtastic
  module Inputs
    module Base
      module Inputmask
        def input_html_options
          super.tap do |options|
            if self.options.fetch(:mask, nil)
              options[:class] = [options[:class], 'inputmask'].compact.join(' ')
              options[:data] ||= {}
              options[:data].merge!(mask_options)
            end
          end
        end

        private

        def mask_options
          options = self.options.fetch(:mask)

          options =
            case options
            when Hash
              Hash[options.map { |k, v| [k.to_s.underscore.dasherize, v] }]
            when String
              { alias: options }
            else
              raise "Expected Hash or String got #{options.class}"
            end

          Hash[options.map { |k, v| ["inputmask-#{k}", v] }]
        end
      end
    end
  end
end
