import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Card from 'grommet/components/Card';
import Paragraph from 'grommet/components/Paragraph';
import Tiles from 'grommet/components/Tiles';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

const grommetPath = 'http://grommet.github.io';

export default class Cards extends Component {
  _onClickCard(path, event) {
    event.preventDefault();
    window.location.href = path;
  }

  render() {
    return (
      <Tiles size="medium" justify="center">
        <Card
          textSize="small"
          colorIndex="light-1"
          margin="small"
          contentPad="medium"
          onClick={this._onClickCard.bind(this, grommetPath)}
          direction="column"
          thumbnail="/img/case_study.png"
          label="Featured Post"
          heading="Protect Your Digital Enterprise ipsum dolores aeat"
          link={<Anchor href={grommetPath} primary={true}
            label="Learn More" icon={<LinkNextIcon />} />}>
          <Paragraph margin="small">
            {`It’s not an either/or world. It’s about finding the
              right platform for each app, workload and service. Learn how
              hybrid infrastructure can help you achieve cloud agility with
              traditional IT predictability. It’s not an either/or world. It’s
              about finding the right platform for each app, workload and
              service.`}
          </Paragraph>
        </Card>
        <Card
          textSize="small"
          colorIndex="light-1"
          margin="small"
          contentPad="medium"
          onClick={this._onClickCard.bind(this, grommetPath)}
          direction="column"
          thumbnail="/img/case_study.png"
          label="Featured Post"
          heading="Foundation Paraguay Empowers Microbusinesses"
          link={<Anchor href={grommetPath} primary={true}
            label="Learn More" icon={<LinkNextIcon />} />}>
          <Paragraph margin="small">
            {`See how Hewlett Packard Enterprise delivers mobile
              solutions to improve quality of life and help eliminate poverty
              in South America.`}
          </Paragraph>
        </Card>
        <Card
          textSize="small"
          colorIndex="light-1"
          margin="small"
          contentPad="medium"
          onClick={this._onClickCard.bind(this, grommetPath)}
          direction="column"
          thumbnail="/img/case_study.png"
          label="Featured Post"
          heading="The Key Steps to Reducing Software Spend"
          link={<Anchor href={grommetPath} primary={true}
            label="Learn More" icon={<LinkNextIcon />} />}>
          <Paragraph margin="small">
            {`HPE Software Licensing and Management Solutions can
            help you optimize your software investments through control of
            complex negotiations and renewal processes`}
          </Paragraph>
        </Card>
      </Tiles>
    );
  }
};
