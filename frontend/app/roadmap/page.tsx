import {Milestones} from '../components';

export default function RoadmapPage () {

    return (
        <div id="roadmap-root"
            className="w-full"
        >
            <strong>Roadmap</strong>
            <div
                className="w-full text-end"
            >
            <Milestones
                containerStyle='py-10'
            />
            </div>
        </div>
    )
}
