interface CharacterInformationPageProps {
  selectedCharacter: Character;
  handleAllCharactersPage: () => void;
}

export function CharacterInformationPage({
  selectedCharacter,
  handleAllCharactersPage,
}: CharacterInformationPageProps) {
  const { name, image, gender, location, species, status, origin } = selectedCharacter;

  return (
    <>
      <h2>{name}</h2>
      <div className="quiz"></div>
      <img src={image} alt={name} />
      <p>Gender: {gender}</p>
      <p>Location: {location.name}</p>
      <p>Specie: {species}</p>
      <p>Status: {status}</p>
      <p>Origin: {origin.name}</p>
      <button className="button-choose-another-character" onClick={handleAllCharactersPage}>
        Choose another character
      </button>
    </>
  );
}
