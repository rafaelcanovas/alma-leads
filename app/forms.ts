export const leadsFormSchema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      minLength: 1,
    },
    lastName: {
      placeholder: 'Last name',
      type: 'string',
      minLength: 1,
    },
    email: {
      type: 'string',
      format: 'email',
    },
    country: {
      type: 'string',
      enum: ['United States', 'Brazil'],
    },
    website: {
      title: 'LinkedIn / Personal Website',
      type: 'string',
      format: 'url'
    },
  },
};

export const visaCategoriesSchema = {
  type: 'object',
  properties: {
    category: {
      type: 'string',
      enum: ['O-1', 'EB-1A', 'EB-2 NIW', 'I don\'t know'],
    },
  },
}

export const visaCategoriesUISchema = {
  type: "Control",
  scope: "#/properties/category",
  label: "",
  options: {
    format: "radio"
  },
}

export const howCanWeHelpYouSchema = {
  type: 'object',
  properties: {
    text: {
      type: 'string',
      format: 'textarea',
    },
  },
};
