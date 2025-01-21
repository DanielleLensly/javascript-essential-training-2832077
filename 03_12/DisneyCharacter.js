class DisneyCharacter {
  constructor(
    //these are the fields that the constructor has
    charName,
    age,
    dress,
    movie,
    series,
    hasCat,
    changesHair,
    isAnimated,
    firstAired
  ) {
    //here is what the constructor does. it assigns the value of DisneyCharacter.charName to the variable named charName
    //if
    this.charName = charName;
    this.age = age;
    this.dress = dress;
    this.movie = movie;
    this.series = series;
    this.hasCat = hasCat;
    this.changesHair = changesHair;
    this.isAnimated = isAnimated;
    this.firstAired = firstAired;
  }
  //this method assigns the hairColour parameter to DisneyCharacter.changesHair - when
  changeHair(hairColour) {
    this.changesHair = hairColour;
  }
}

//That's so Raven, Kuzco, Sabrina

class BoyChar extends DisneyCharacter {
  constructor(
    charName,
    age,
    dress,
    movie,
    series,
    hasCat,
    changesHair,
    isAnimated,
    firstAired,
    hasGirlfriend
  ) {
    super(
      charName,
      age,
      dress,
      movie,
      series,
      hasCat,
      changesHair,
      isAnimated,
      firstAired
    );

    this.hasGirlfriend = hasGirlfriend;
  }
  getGirlfriend() {
    if (this.hasCat == true) {
      console.log("Time to settle down");
    } else {
      console.log("Time to get a cat, Mr/Ms ", this.charName);
    }
  }
}

export default BoyChar;
