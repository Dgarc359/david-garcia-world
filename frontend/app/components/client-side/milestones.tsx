"use client"
import { getRepoMilestones } from '@/app/util';
import React from 'react';

export function Milestones(props: { className?: string}) {

    const [roadmapMilestones, setRoadmapMilestones] = React.useState<any | null>(null);

    React.useEffect(() => {
        console.log("use effect");

    (async () => {
        const repoMilestones = await getRepoMilestones('Dgarc359', 'david-garcia-world');
        const mappedMilestones = repoMilestones
            .map((res: any) => res.title)
        console.log(JSON.stringify(mappedMilestones))
        setRoadmapMilestones(mappedMilestones);
    })()
        
    }, []);

    if(!roadmapMilestones)
    {
        return (<div/>)
    }

    return roadmapMilestones.map((item: any) => {
        return (<div key={item} className={props.className ?? ""}>
            {item}
        </div>)
    })
}
