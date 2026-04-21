import {
  aiBestUseCases,
  type AiBestUseCaseConfig,
} from "@/data/aiBestUseCases";

export function getAiBestUseCase(
  slug: string
): AiBestUseCaseConfig | undefined {
  return aiBestUseCases.find((item) => item.slug === slug);
}