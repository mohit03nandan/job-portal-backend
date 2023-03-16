const express = require("express");
const mongoose = require("mongoose");
const { Router } = require("express");
const schema = require("../model/schema");
const route = Router();

var jobPortal = schema.jobPortal;

route.post("/", async (req, res, next) => {
  try {
  const companyName = req.body.companyName;
  const companyLogo = req.body.companyLogo;
  const Position = req.body.Position;
  const Salary = req.body.Salary;
  const workingEmploye = req.body.workingEmployee
  const jobType = req.body.jobType;
  const jobWork = req.body.jobWork;
  const Location = req.body.Location;
  const Description = req.body.Description;
  const About = req.body.About;
  const tags = req.body.tags;

    const portalCollection = new jobPortal({
      companyName: companyName,
      logo: companyLogo,
      jobPosition: Position,
      salary: Salary,
      workingEmployee:workingEmploye,
      jobType: jobType,
      jobWork: jobWork,
      location: Location,
      Description: Description,
      aboutCompany: About,
      skills: tags,
    });
    portalCollection.save();
    res.send(portalCollection);
  } catch (error) {
    next();
  }
});

route.post("/portalupdate", async (req, res, next) => {
  try {
    const id = req.body.id;
    const companyName = req.body.companyName;
    const companyLogo = req.body.companyLogo;
    const Position = req.body.Position;
    const Salary = req.body.Salary;
    const workingEmploye = req.body.workingEmployee;
    const jobType = req.body.jobType;
    const jobWork = req.body.jobWork;
    const Location = req.body.Location;
    const Description = req.body.Description;
    const About = req.body.About;
    const tags = req.body.tags;
    console.log("updatecompanyName", id);

    const updatedocument = async (_id) => {
      const result = await jobPortal.updateOne(
        { _id },
        {
          $set: {
            companyName: companyName,
            logo: companyLogo,
            jobPosition: Position,
            salary: Salary,
            workingEmployee:workingEmploye,
            jobType: jobType,
            jobWork: jobWork,
            location: Location,
            Description: Description,
            aboutCompany: About,
            skills: tags,
          },
        }
      );
      res.send(result);
    };

    updatedocument(id);
    
  } catch (error) {
    console.log(error);
  }
});


route.get("/Desc/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
      console.log("id", id);
      // db.bios.find( { _id: 5 } )
      const result = await jobPortal.find({ _id: id} )
      res.send(result);
      console.log("descresult",result)

    
  } catch (error) {
    console.log(error);
  }
});

route.get("/get-jobPortal", async (req, res, next) => {
  try {
    const getPortalData = await jobPortal.find();
    console.log(getPortalData);
    res.send(getPortalData);
  } catch (error) {
    next();
  }
});

route.get("/get-location", async (req, res, next) => {
  try {
    const getPortalData = await jobPortal
      .find()
      .select("location")
      .distinct("location");
    res.send(getPortalData);
  } catch (error) {
    next();
  }
});

route.get("/get-skills", async (req, res, next) => {
  try {
    const getskillsData = await jobPortal
      .find()
      .select("skills")
      .distinct("skills");
    res.send(getskillsData);
  } catch (error) {
    next();
  }
});

module.exports = route;
