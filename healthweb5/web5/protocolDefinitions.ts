/**
 * This is a protocol that enables issuer to write
 * verifiable credential to the Holder's DWN
 */
//we can filter out the accreditation specifically from cohsasa by querying this protocol
import { TIssuerProtocol, THealthProtocolDefinition } from './types/protocolType';

export const issuerProtocol: TIssuerProtocol = {
  protocol: 'https://cohsasacredential.com',
  published: true,
  types: {
    Accreditation: {
      schema: 'https://cohsasacredential.com/accreditation',
      dataFormats: ['application/json']
    }
  },
  structure: {
    Accreditation: {
      $actions: [
        { who: 'anyone', can: 'read' },
        { who: 'anyone', can: 'write' }
      ]
    }
  }
};

/**
 * This is a protocol that allows individuals to grant access to any health institution
 * The health institution would be authorized to write Medical record
 * while the individual can only read the Medical records
 */
export const healthProtocolDefinition: THealthProtocolDefinition = {
  protocol: 'https://HealthRecord.com',
  published: true,
  types: {
    grantaccess: {
      schema: 'https://HealthRecord.com/access',
      dataFormats: ['text/plain']
    },
    form: {
      schema: 'https://HealthRecord.com/form',
      dataFormats: ['application/json']
    },
    formFilled: {
      schema: 'https://HealthRecord.com/formFilled',
      dataFormats: ['application/json']
    }
  },
  structure: {
    grantaccess: {
      $actions: [
        {
          who: 'anyone',
          can: 'write'
        }
      ],
      form: {
        $actions: [
          {
            who: 'recipient',
            of: 'grantaccess',
            can: 'write'
          },
          {
            who: 'author',
            of: 'grantaccess',
            can: 'read'
          }
        ],
        formFilled: {
          $actions: [
            {
              who: 'recipient',
              of: 'form',
              can: 'read'
            }
          ]
        }
      }
    }
  }
};
