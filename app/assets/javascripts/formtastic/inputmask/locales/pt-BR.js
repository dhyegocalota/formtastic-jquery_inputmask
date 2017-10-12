(function() {
  'use strict';

  Inputmask.extendAliases({
    cpf: {
      mask: '9{3}.9{3}.9{3}-9{2}'
    },
    cnpj: {
      mask: '9{2}.9{3}.9{3}/9{4}-9{2}'
    },
    cpf_cnpj: {
      mask: ['9{3}.9{3}.9{3}-9{2}', '9{2}.9{3}.9{3}/9{4}-9{2}']
    },
    cnpj_cpf: {
      alias: 'cpf_cnpj'
    },
    phone: {
      mask: ['(9{2}) 9{4}-9{4}', '(9{2}) 9{5}-9{4}']
    },
    cep: {
      mask: '9{5}-9{3}'
    },
    zip_code: {
      alias: 'cep'
    },
    postal_code: {
      alias: 'cep'
    },
    currency: {
      prefix: 'R$ ',
      groupSeparator: '.',
      radixPoint: ',',
      alias: 'numeric',
      placeholder: '0',
      autoGroup: true,
      digits: 2,
      digitsOptional: false,
      clearMaskOnLostFocus: false,
      rightAlign: false,
      numericInput: true
    },
    decimal: {
      alias: 'numeric',
      rightAlign: false
    },
    integer: {
      alias: 'numeric',
      digits: 0,
      radixPoint: '',
      rightAlign: false
    },
    percentage: {
      alias: 'numeric',
      digits: 2,
      digitsOptional: true,
      radixPoint: '.',
      placeholder: '0',
      autoGroup: false,
      min: null,
      max: null,
      suffix: '%',
      allowMinus: true,
      rightAlign: false
    },
    date: {
      alias: 'datetime',
      inputFormat: 'dd/mm/yyyy'
    },
    shortDate: {
      alias: 'datetime',
      inputFormat: 'dd/mm/yy'
    }
  });
}());
