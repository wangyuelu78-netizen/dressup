import { useState } from "react";

function CharacterOption({ character, selected, onSelect }) {
  const [missing, setMissing] = useState(false);

  return (
    <button
      className={`character-option${selected ? " character-option-active" : ""}`}
      type="button"
      onClick={() => onSelect(character.id)}
      aria-pressed={selected}
    >
      <span className="character-thumb" aria-hidden="true">
        {missing ? (
          <span className="character-thumb-placeholder">素材待补</span>
        ) : (
          <img
            src={character.thumbnail}
            alt=""
            onError={() => setMissing(true)}
          />
        )}
      </span>
      <span>{character.name}</span>
      {character.type && <small>{character.type}</small>}
    </button>
  );
}

export default function CharacterSelector({
  characters,
  selectedCharacterId,
  onSelectCharacter,
}) {
  return (
    <section className="character-selector" aria-label="基础灵瑞选择">
      <div>
        <h2>选择灵瑞</h2>
        <p>先选择一位灵瑞，再选择同套上衣和下装进入画中。</p>
      </div>
      <div className="character-options">
        {characters.map((character) => (
          <CharacterOption
            character={character}
            key={character.id}
            onSelect={onSelectCharacter}
            selected={selectedCharacterId === character.id}
          />
        ))}
      </div>
    </section>
  );
}
