const authPage = (permissions) => {
  return (req, res, next) => {
    const meucargo = req.body.meucargo;
    if (permissions.includes(meucargo)) {
      next();
    } else {
      return res.status(401).json("You don't have permission");
    }
  };
};

export = { authPage };
