import { Avatar } from './avatar-group.types';

// All avatars' properties are present and valid.
export const avatars4: Avatar[] = [
  {
    person: {
      firstName: 'firstName1',
      preferredFirstName: 'preferredFirstName1',
      lastName: 'lastName1',
      formerLastName: 'formerLastName1',
    },
    link: 'redirectUrl1',
    tooltip: 'tooltip1',
  },
  {
    person: {
      firstName: 'firstName2',
      preferredFirstName: 'preferredFirstName2',
      lastName: 'lastName2',
      formerLastName: 'formerLastName2',
    },
    link: 'redirectUrl2',
    image: 'photoUploadId2',
    tooltip: 'tooltip2',
  },
  {
    person: {
      firstName: 'firstName3',
      preferredFirstName: 'preferredFirstName3',
      lastName: 'lastName3',
      formerLastName: 'formerLastName3',
    },
    image: 'photoUploadId3',
    link: 'redirectUrl3',
    tooltip: 'tooltip3',
  },
];

// Each avatar requires a different tooltip computation.
export const avatars5: Avatar[] = [
  // Has explicit tooltip, which should override any computation.
  {
    person: {
      firstName: 'firstName1',
      preferredFirstName: 'preferredFirstName1',
      lastName: 'lastName1',
      formerLastName: 'formerLastName1',
    },
    image: 'photoUploadId1',
    link: 'redirectUrl1',
    tooltip: 'tooltip1',
  },
  // Has empty tooltip, but person fullname can be computed.
  {
    person: {
      firstName: 'firstName2',
      preferredFirstName: 'preferredFirstName2',
      lastName: 'lastName2',
      formerLastName: 'formerLastName2',
    },
    link: 'redirectUrl2',
    image: 'photoUploadId2',
    tooltip: '',
  },
  // Does not have tooltip, but person fullname can be computed.
  {
    person: {
      firstName: 'firstName3',
      lastName: 'lastName3',
    },
    image: 'photoUploadId3',
    link: 'redirectUrl3',
  },
  // Does not have tooltip, but person fullname can be computed.
  {
    person: {
      firstName: 'firstName4',
      lastName: 'lastName4',
      preferredFirstName: 'preferredFirstName4',
    },
    image: 'photoUploadId4',
    link: 'redirectUrl4',
  },
  // Does not have tooltip, but person fullname can be computed.
  {
    person: {
      firstName: 'firstName5',
      lastName: 'lastName5',
      formerLastName: 'formerLastName5',
    },
    image: 'photoUploadId5',
    link: 'redirectUrl5',
  },
];

/*
 * These are corner case avatars. Some contain missing fields necessary for some
 * tooltip computations while containing all fields necessary for the prioritized
 * tooltip computation. Other avatars are invalid and should be gracefully error
 * handled.
 */
export const avatarsX: Avatar[] = [
  // Valid Avatar. All fields are present and valid.
  {
    person: {
      firstName: 'firstName1',
      preferredFirstName: 'preferredFirstName1',
      lastName: 'lastName1',
      formerLastName: 'formerLastName1',
    },
    image: 'photoUploadId1',
    link: 'redirectUrl1',
  },
  // Invalid avatar: missing person first name.
  {
    person: {
      firstName: null,
      preferredFirstName: 'preferredFirstName2',
      lastName: 'lastName2',
      formerLastName: 'formerLastName2',
    },
    image: 'photoUploadId2',
    link: 'redirectUrl2',
  },
  // Valid avatar, but missing person preferred first name
  {
    person: {
      firstName: 'firstName3',
      lastName: 'lastName3',
      formerLastName: 'formerLastName3',
    },
    image: 'photoUploadId3',
    link: 'redirectUrl3',
  },
  // Invalid avatar: missing person last name.
  {
    person: {
      firstName: 'firstName4',
      lastName: null,
      preferredFirstName: 'preferredFirstName4',
      formerLastName: 'formerLastName4',
    },
    image: 'photoUploadId4',
    link: 'redirectUrl4',
  },
  // Valid avatar, but missing person former last name.
  {
    person: {
      firstName: 'firstName5',
      preferredFirstName: 'preferredFirstName5',
      lastName: 'lastName5',
    },
    link: 'redirectUrl5',
  },
  // Invalid avatar: missing person first and preferred names.
  {
    person: {
      firstName: null,
      preferredFirstName: null,
      lastName: 'lastName7',
      formerLastName: 'formerLastName7',
    },
    image: 'photoUploadId7',
    link: 'redirectUrl7',
  },
  // Invalid avatar: missing person former and last name.
  {
    person: {
      firstName: 'firstName8',
      lastName: null,
      formerLastName: null,
      preferredFirstName: 'preferredFirstName8',
    },
    image: 'photoUploadId8',
    link: 'redirectUrl8',
  },
  // Invalid avatar: missing person and tooltip.
  {
    image: 'redirectUrl9',
  },
  // Valid avatar: missing all fields other than tooltip.
  {
    tooltip: 'tooltip10',
  },
];
