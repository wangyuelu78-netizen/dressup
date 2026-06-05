export interface UnlockRule {
  id: string;
  themeId: string;
  name: string;
  requiredTags: Record<string, number>;
  requiredCategories: string[];
  resultTitle: string;
  resultCopy: string;
}

export const unlockRules: UnlockRule[] = [];
