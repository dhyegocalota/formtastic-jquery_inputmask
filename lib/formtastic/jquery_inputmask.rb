require 'active_support/core_ext'
require 'formtastic'

module Formtastic
  module JqueryInputmask
    autoload :Version, 'formtastic/jquery_inputmask/version'
  end
end

require 'formtastic/jquery_inputmask/engine'
require 'formtastic/inputs/base/inputmask'

[
  Formtastic::Inputs::DatalistInput,
  Formtastic::Inputs::PhoneInput,
  Formtastic::Inputs::SearchInput,
  Formtastic::Inputs::StringInput,
  Formtastic::Inputs::TextInput,
  Formtastic::Inputs::UrlInput
].each { |klass| klass.include(Formtastic::Inputs::Base::Inputmask) }
