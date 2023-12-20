import stringToColor from "./stringToColor";

function stringAvatar(name, split = true) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      borderRadius: 2
    },
    children: split ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` : name,
  };
}

export default stringAvatar