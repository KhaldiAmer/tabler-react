// @flow
import * as React from "react";

import { Header, Card, Button, Grid } from "tabler-react";

import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsCardsPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Cards</Header.H2>

      <Header.H3>Default Card</Header.H3>
      <ComponentDemo>
        <Card
          title="Card title"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          deleniti fugit incidunt, iste, itaque minima neque pariatur
          perferendis sed suscipit velit vitae voluptatem. A consequuntur,
          deserunt eaque error nulla temporibus!"
        />
      </ComponentDemo>

      <Header.H3>Advanced Card</Header.H3>
      <ComponentDemo>
        <Card>
          <Card.Header>
            <Card.Title>Card title</Card.Title>
            <Card.Options>
              <Button color="primary" size="sm">
                Action 1
              </Button>
              <Button color="secondary" size="sm" className="ml-2">
                Action 2
              </Button>
            </Card.Options>
          </Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            deleniti fugit incidunt, iste, itaque minima neque pariatur
            perferendis sed suscipit velit vitae voluptatem. A consequuntur,
            deserunt eaque error nulla temporibus!
          </Card.Body>
          <Card.Footer>This is standard card footer</Card.Footer>
        </Card>
      </ComponentDemo>

      <Header.H3>Row Deck</Header.H3>
      <p>
        If you want to create a couple of posts next to each other, add the
        'deck' prop and they will all have the same height.
      </p>
      <ComponentDemo>
        <Grid.Row cards deck>
          <Grid.Col md={4}>
            <Card body="Short content" />
          </Grid.Col>
          <Grid.Col md={4}>
            <Card
              body="Extra long content of card. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr"
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <Card body="Short content" />
          </Grid.Col>
        </Grid.Row>
      </ComponentDemo>

      <Header.H3>Card Variations</Header.H3>
      <ComponentDemo>
        <Grid.Row cards deck>
          <Grid.Col md={6}>
            <Card
              statusColor="purple"
              title="Card status"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur
              perferendis sed suscipit velit vitae voluptatem. A consequuntur,
              deserunt eaque error nulla temporibus!"
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <Card>
              <Card.Status color="blue" side />
              <Card.Header>
                <Card.Title>Card status left side</Card.Title>
              </Card.Header>
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam deleniti fugit incidunt, iste, itaque minima neque
                pariatur perferendis sed suscipit velit vitae voluptatem. A
                consequuntur, deserunt eaque error nulla temporibus!
              </Card.Body>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}
export default DocsCardsPage;
