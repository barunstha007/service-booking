const router = require("express").Router();
const Packages = require("../../models/Packages.model");
const { check, validationResult } = require("express-validator");

// @route   GET '/packages'
// @desc    get all packages
// @access  Public
router.get("/all", async (req, res) => {
  try {
    // Search admin
    const getPackages = await Packages.find();

    return res.json(getPackages);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route   GET '/packages'
// @desc    get packages By id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    // Search admin
    const getPackageById = await Packages.findById(req.params.id);

    return res.json(getPackageById);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

//@route    POST /packages
//@desc     add new package
//@access   Superuser
router.post(
  "/add",
  [
    [
      check("title", "Please enter package title").not().isEmpty(),
      check("desc", "Please enter package description").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // if (req.user.role !== 1)
    //     return res.status(400).json({ error: [{ 'msg': 'Invalid Account!' }] })

    const error = validationResult(req);
    // If validation errors
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });

    try {
      // If user exists, Update else Create new
      let packageDetails = await new Packages({
        title: req.body.title,
        desc: req.body.desc,
      });

      packageDetails.save();

      return res.json(packageDetails);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);

//@route    POST /packages
//@desc     update package
//@access   Superuser
router.post(
  "/update/:id",
  [
    [
      check("title", "Please enter package title").not().isEmpty(),
      check("desc", "Please enter package description").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const error = validationResult(req);
    // If validation errors
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });

    try {
      // If user exists, Update else Create new
      let packageUpdate = await Packages.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            title: req.body.title,
            desc: req.body.desc,
          },
        },
        { new: true }
      );

      return res.json(packageUpdate);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);

module.exports = router;
