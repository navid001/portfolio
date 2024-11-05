// SelectedProjectDialog.tsx
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/projects";

interface SelectedProjectDialogProps {
    project: Project | null;
    onClose: () => void;
}

export function SelectedProjectDialog({
    project,
    onClose,
}: SelectedProjectDialogProps) {
    if (!project) return null;

    return (
        <Dialog open={!!project} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                    <div className="relative h-64 w-full rounded-lg overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain w-full h-full"
                        />
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Overview
                            </h3>
                            <p className="text-muted-foreground">
                                {project.caseStudy.overview}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Challenge
                            </h3>
                            <p className="text-muted-foreground">
                                {project.caseStudy.challenge}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Solution
                            </h3>
                            <p className="text-muted-foreground">
                                {project.caseStudy.solution}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Key Features
                            </h3>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                {project.caseStudy.features.map(
                                    (feature, index) => (
                                        <li key={index}>{feature}</li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Results
                            </h3>
                            <p className="text-muted-foreground">
                                {project.caseStudy.results}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {project.caseStudy.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative h-48 rounded-lg overflow-hidden bg-secondary/10"
                                >
                                    <Image
                                        src={image}
                                        alt="Project image"
                                        layout="fill"
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 justify-around">
                            {project.liveUrl && (
                                <Button asChild>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        View Live Site
                                    </a>
                                </Button>
                            )}
                            <Button variant="outline" asChild>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="h-4 w-4 mr-2" />
                                    View Source
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
