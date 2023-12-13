export type TIssuerProtocol = {
  protocol: string;
  published: boolean;
  types: {
    Accreditation: {
      schema: string;
      dataFormats: Array<string>;
    };
  };
  structure: {
    Accreditation: {
      $actions: {
        who: string;
        can: string;
      }[];
    };
  };
};

export type THealthProtocolDefinition = {
  protocol: string;
  published: boolean;
  types: {
    grantaccess: {
      schema: string;
      dataFormats: string[];
    };
    form: {
      schema: string;
      dataFormats: string[];
    };
    formFilled: {
      schema: string;
      dataFormats: string[];
    };
  };
  structure: {
    grantaccess: {
      $actions: {
        who: string;
        can: string;
      }[];
      form: {
        $actions: {
          who: string;
          of: string;
          can: string;
        }[];
        formFilled: {
          $actions: {
            who: string;
            of: string;
            can: string;
          }[];
        };
      };
    };
  };
};
