export interface ClothingItem {
  id: string;
  name: string;
  imageUrl: string;
  isEquipped: boolean;
  isLocked: boolean;
}

export interface EquippedItem {
  id: string;
  name: string;
}

export interface NavItem {
  id: string;
  icon: string;
  label: string;
  isActive: boolean;
}