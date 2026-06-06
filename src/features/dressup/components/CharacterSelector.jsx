import { useState } from "react";

function CharacterOption({ character, selected, onSelect }) {
  const [missing, setMissing] = useState(false);

  return (
    <button
      className={`character-option${selected ? " character-option-active" : ""}`}
      type="button"
      onClick={() => onSelect(character)}
    >
      <span className="character-thumb" aria-hidden="true">
        {missing ? (
          <span className="character-thumb-placeholder">待补充</span>
        ) : (
          <img
            src={character.thumbnail}
            alt=""
            onError={() => setMissing(true)}
          />
        )}
      </span>
      <span>{character.name}</span>
    </button>
  );
}

export default function CharacterSelector({
  characters,
  selectedCharacter,
  onSelectCharacter,
}) {
  return (
    <section className="character-selector" aria-label="基础角色选择">
      <div>
        <h2>选择卡通角色</h2>
        <p>先选择一个基础形象，再进入古画服饰搭配。</p>
      </div>
      <div className="character-options">
        {characters.map((character) => (
          <CharacterOption
            character={character}
            key={character.id}
            onSelect={onSelectCharacter}
            selected={selectedCharacter.id === character.id}
          />
        ))}
      </div>
    </section>
  );
}
