require("dotenv").config();
const axios = require("axios");
const config = require("../../../../config/config");

class Colombia {
  constructor() {
    this.API_URL = config.API_BASE_URL;
    this.version = "v1";
  }

  async findInfoColombia() {
    try {
      const info_colombia = await axios.get(
        `${this.API_URL}/api/${this.version}/country/Colombia`
      );
      return info_colombia.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findDepartaments() {
    try {
      const departaments = await axios.get(
        `${this.API_URL}/api/${this.version}/Departament`
      );
      return departaments.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findOneDepartament(id) {
    try {
      const departament = await axios.get(
        `${this.API_URL}/api/${this.version}/Departament/${id}`
      );
      return departament.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findRegions() {
    try {
      const regions = await axios.get(
        `${this.API_URL}/api/${this.version}/Region`
      );
      return regions.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findOneRegion(id) {
    try {
      const region = await axios.get(
        `${this.API_URL}/api/${this.version}/Region/${id}`
      );
      return region.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findTouristsSites() {
    try {
      const TouristsSites = await axios.get(
        `${this.API_URL}/api/${this.version}/TouristicAttraction`
      );
      return TouristsSites.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findOneTouristSite(id) {
    try {
      const TouristSite = await axios.get(
        `${this.API_URL}/api/${this.version}/TouristicAttraction/${id}`
      );
      return TouristSite.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findPresidents() {
    try {
      const Presidents = await axios.get(
        `${this.API_URL}/api/${this.version}/President`
      );
      return Presidents.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findOnePresident(id) {
    try {
      const President = await axios.get(
        `${this.API_URL}/api/${this.version}/President/${id}`
      );
      return President.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findAreasNaturals() {
    try {
      const NaturalArea = await axios.get(
        `${this.API_URL}/api/${this.version}/NaturalArea`
      );
      return NaturalArea.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findOneAreaNatural(id) {
    try {
      const NaturalArea = await axios.get(
        `${this.API_URL}/api/${this.version}/NaturalArea/${id}`
      );
      return NaturalArea.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findCategoryNaturalArea() {
    try {
      const CategoryNaturalArea = await axios.get(
        `${this.API_URL}/api/${this.version}/CategoryNaturalArea`
      );
      return CategoryNaturalArea.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async findMap() {
    try {
      const Map = await axios.get(
        `${this.API_URL}/api/${this.version}/CategoryNaturalArea`
      );
      return Map.data;
    } catch (error) {
      return { message: error.message };
    }
  }

  async searchByKeyWords(option, keyword) {
    try {
      const search = await axios.get(
        `${this.API_URL}/api/${this.version}/${option}/search/${keyword}`
      );
      return search.data;
    } catch (error) {
      return { message: error.message };
    }
  }
}

module.exports = Colombia;
